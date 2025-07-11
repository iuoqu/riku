const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const imagesToOptimize = [
  'public/images/artworks/coffee-mugs/rm005.jpg',
  'public/images/artworks/coffee-mugs/rs001.jpg'
];

async function optimizeImage(inputPath) {
  const image = sharp(inputPath);
  const metadata = await image.metadata();
  
  // Create optimized version
  await image
    .resize(2000, 2000, {
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    })
    .jpeg({
      quality: 80,
      mozjpeg: true
    })
    .toBuffer()
    .then(data => {
      // Only overwrite if we managed to reduce the size
      if (data.length < metadata.size) {
        fs.writeFileSync(inputPath, data);
        console.log(`Optimized ${path.basename(inputPath)}: ${(metadata.size / 1024 / 1024).toFixed(2)}MB → ${(data.length / 1024 / 1024).toFixed(2)}MB`);
      } else {
        console.log(`Skipped ${path.basename(inputPath)}: Already optimized`);
      }
    });
}

async function optimizeAll() {
  for (const imagePath of imagesToOptimize) {
    await optimizeImage(imagePath);
  }
}

optimizeAll().catch(console.error); 