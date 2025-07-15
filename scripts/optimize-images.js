const sharp = require('sharp');
const path = require('path');
const fs = require('fs');
const glob = require('glob');

// Configuration
const CONFIG = {
  // Quality settings by image type
  quality: {
    artwork: 80,      // Product images
    hero: 85,         // Hero/banner images  
    gallery: 75,      // Gallery images
  },
  // Size limits by category
  sizes: {
    artwork: { width: 1200, height: 1200 },  // Square for products
    hero: { width: 1920, height: 1080 },     // 16:9 for heroes
    gallery: { width: 1200, height: 800 },   // 3:2 for gallery
  },
  // Target file sizes (in bytes)
  targetSizes: {
    artwork: 400 * 1024,    // 400KB max for products
    hero: 800 * 1024,       // 800KB max for heroes
    gallery: 600 * 1024,    // 600KB max for gallery
  }
};

async function optimizeImage(inputPath, category = 'artwork') {
  try {
    // Normalize path for cross-platform compatibility
    const normalizedPath = path.resolve(inputPath);
    
    // Check if file exists and is readable
    if (!fs.existsSync(normalizedPath)) {
      console.log(`   ❌ File not found: ${inputPath}`);
      return { success: false, reason: 'file_not_found' };
    }
    
    const stats = fs.statSync(normalizedPath);
    if (!stats.isFile()) {
      console.log(`   ❌ Not a file: ${inputPath}`);
      return { success: false, reason: 'not_a_file' };
    }
    
    console.log(`\n🔄 Processing: ${path.basename(inputPath)}`);
    
    const image = sharp(normalizedPath);
    const metadata = await image.metadata();
    const originalSize = stats.size;
    
    console.log(`   Original: ${(originalSize / 1024 / 1024).toFixed(2)}MB (${metadata.width}x${metadata.height})`);
    
    const config = CONFIG.sizes[category];
    const quality = CONFIG.quality[category];
    const targetSize = CONFIG.targetSizes[category];
    
    // Process image with different quality levels if needed
    let currentQuality = quality;
    let optimizedBuffer;
    let attempts = 0;
    const maxAttempts = 5;
    
    do {
      optimizedBuffer = await image
        .resize(config.width, config.height, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 1 },
          withoutEnlargement: true
        })
        .jpeg({ 
          quality: currentQuality,
          mozjpeg: true,
          progressive: true
        })
        .toBuffer();
        
      attempts++;
      if (optimizedBuffer.length > targetSize && currentQuality > 60) {
        currentQuality -= 5;
      } else {
        break;
      }
    } while (attempts < maxAttempts);
    
    // Only save if we achieved compression
    if (optimizedBuffer.length < originalSize) {
      // Create backup of original
      const backupPath = normalizedPath.replace(/\.(jpg|jpeg|png)$/i, '.original.$1');
      if (!fs.existsSync(backupPath)) {
        try {
          fs.copyFileSync(normalizedPath, backupPath);
        } catch (error) {
          console.log(`   ⚠️  Warning: Could not create backup - ${error.message}`);
        }
      }
      
      // Save optimized version
      try {
        fs.writeFileSync(normalizedPath, optimizedBuffer);
      } catch (error) {
        console.log(`   ❌ Error saving file: ${error.message}`);
        return { success: false, reason: 'save_error', error: error.message };
      }
      
      const newSize = optimizedBuffer.length;
      const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
      
      console.log(`   ✅ Optimized: ${(newSize / 1024 / 1024).toFixed(2)}MB (${savings}% smaller)`);
      console.log(`   📊 Quality: ${currentQuality}% | Target: <${(targetSize / 1024).toFixed(0)}KB`);
      
      return { success: true, originalSize, newSize, savings: parseFloat(savings) };
    } else {
      console.log(`   ⏭️  Skipped: Already optimal`);
      return { success: false, reason: 'already_optimal' };
    }
    
  } catch (error) {
    console.log(`   ❌ Error: ${error.message}`);
    return { success: false, reason: 'error', error: error.message };
  }
}

async function optimizeDirectory(pattern, category) {
  console.log(`\n🎯 Optimizing ${category} images: ${pattern}`);
  
  // Use glob with specific options for Windows
  const files = glob.sync(pattern, { 
    windowsPathsNoEscape: true,
    nonull: false 
  });
  
  if (files.length === 0) {
    console.log(`   📁 No files found matching pattern`);
    return;
  }
  
  const results = {
    processed: 0,
    optimized: 0,
    totalSavings: 0,
    totalOriginalSize: 0,
    totalNewSize: 0
  };
  
  for (const file of files) {
    const result = await optimizeImage(file, category);
    results.processed++;
    
    if (result.success) {
      results.optimized++;
      results.totalOriginalSize += result.originalSize;
      results.totalNewSize += result.newSize;
      results.totalSavings += result.savings;
    }
  }
  
  if (results.optimized > 0) {
    const avgSavings = (results.totalSavings / results.optimized).toFixed(1);
    const totalMBSaved = ((results.totalOriginalSize - results.totalNewSize) / 1024 / 1024).toFixed(2);
    
    console.log(`\n📊 ${category.toUpperCase()} SUMMARY:`);
    console.log(`   Files processed: ${results.processed}`);
    console.log(`   Files optimized: ${results.optimized}`);
    console.log(`   Average savings: ${avgSavings}%`);
    console.log(`   Total space saved: ${totalMBSaved}MB`);
  }
}

async function optimizeAll() {
  console.log('🖼️  RiKU Ceramics Image Optimizer');
  console.log('==================================');
  
  // Optimize different categories with Windows-friendly paths
  await optimizeDirectory('public/images/artworks/**/*.{jpg,jpeg,JPG,JPEG}', 'artwork');
  await optimizeDirectory('public/images/hero/*.{jpg,jpeg,JPG,JPEG}', 'hero');
  await optimizeDirectory('public/images/gallery/*.{jpg,jpeg,JPG,JPEG}', 'gallery');
  
  console.log('\n🎉 Optimization complete!');
  console.log('\n💡 Tips:');
  console.log('   • Original files backed up as .original.*');
  console.log('   • WebP conversion happens automatically via Next.js');
  console.log('   • Run this script after adding new images');
}

// CLI usage
if (require.main === module) {
  // Check if sharp is available
  try {
    require('sharp');
  } catch (error) {
    console.log('❌ Sharp not installed. Installing...');
    console.log('Run: npm install sharp');
    process.exit(1);
  }
  
  // Check if glob is available  
  try {
    require('glob');
  } catch (error) {
    console.log('❌ Glob not installed. Installing...');
    console.log('Run: npm install glob');
    process.exit(1);
  }
  
  optimizeAll().catch(console.error);
}

module.exports = { optimizeImage, optimizeDirectory, optimizeAll }; 