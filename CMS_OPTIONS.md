# Simple CMS Options for RiKU Ceramics

## Overview
Here are 5 increasingly sophisticated ways to manage content without external CMS systems:

## 1. 📁 JSON File-Based CMS (IMPLEMENTED)

**What we just created:**
- `src/data/artworks.json` - All artwork data
- `src/data/siteContent.json` - Site-wide content (hero, about, etc.)
- Simple admin interface at `/admin`
- API routes for reading/writing JSON files

**How to use:**
1. Visit `/admin` to manage content through web interface
2. Or edit JSON files directly in your code editor
3. Changes are immediately reflected on the website

**Pros:**
- ✅ No external dependencies
- ✅ Version controlled with your code
- ✅ Fast and simple
- ✅ Works offline

**Cons:**
- ❌ No image upload handling
- ❌ Basic validation only
- ❌ Direct file system access needed

---

## 2. 📄 Markdown File-Based CMS

**How it works:**
- Store content in Markdown files
- Use frontmatter for metadata
- Parse files at build time or runtime

**Example structure:**
```
content/
├── artworks/
│   ├── ethereal-vase-1.md
│   ├── tea-set-traditional.md
│   └── sculpture-abstract.md
├── pages/
│   ├── about.md
│   └── hero.md
└── settings/
    └── site.md
```

**Example artwork file:**
```markdown
---
title: "Ethereal Vase I"
category: "vases"
price: "$1,200"
available: true
featured: true
image: "/images/artworks/vases/vase-1.jpg"
dimensions: "H: 30cm, W: 15cm"
---

A delicate porcelain vase with ethereal blue glazes that captures the essence of traditional Japanese pottery while embracing contemporary design principles.
```

**Implementation:**
- Use libraries like `gray-matter` and `remark`
- Build-time parsing with Next.js static generation
- Simple admin interface for creating/editing markdown

---

## 3. 🗃️ SQLite Database CMS

**How it works:**
- Local SQLite database file
- Simple database schema
- SQL queries for data management
- Web interface for CRUD operations

**Schema example:**
```sql
CREATE TABLE artworks (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT,
  price TEXT,
  dimensions TEXT,
  image_path TEXT,
  available BOOLEAN DEFAULT 1,
  featured BOOLEAN DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE site_content (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

**Benefits:**
- ✅ Relational data
- ✅ Better querying
- ✅ Data integrity
- ✅ Backup-friendly

---

## 4. 🚀 Git-Based CMS

**How it works:**
- Content stored in Git repository
- Admin interface commits changes
- Automatic deployments trigger on content changes
- Version history for all content

**Implementation approaches:**

### A) Direct Git commits:
```javascript
// Save content by committing to Git
const saveContent = async (data) => {
  // Write JSON file
  await fs.writeFile('data/artworks.json', JSON.stringify(data));
  
  // Git commit
  await exec('git add data/artworks.json');
  await exec('git commit -m "Update artworks"');
  await exec('git push origin main');
};
```

### B) GitHub API integration:
```javascript
// Use GitHub API to update files
const updateFile = async (content) => {
  const response = await fetch(`https://api.github.com/repos/owner/repo/contents/data/artworks.json`, {
    method: 'PUT',
    headers: {
      'Authorization': `token ${GITHUB_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: 'Update artworks',
      content: btoa(JSON.stringify(content)),
      sha: currentFileSha,
    }),
  });
};
```

**Benefits:**
- ✅ Full version history
- ✅ Automatic deployments
- ✅ Distributed content
- ✅ Collaboration friendly

---

## 5. 🖼️ Full-Featured File-Based CMS

**Features:**
- Image upload and processing
- Rich text editor
- Media library
- User authentication
- Preview mode
- Scheduled publishing

**Tech stack:**
- Next.js API routes
- File uploads with `multer` or similar
- Image processing with `sharp`
- Rich text with `react-quill` or `slate.js`
- Authentication with `next-auth`

**Directory structure:**
```
cms/
├── uploads/           # User uploaded images
├── cache/            # Processed images
├── backups/          # Automatic backups
└── users.json        # User accounts
```

---

## Recommended Implementation Path

### Phase 1: Start with JSON Files (Current)
- Use the system we just created
- Simple and immediate
- No additional setup required

### Phase 2: Add Image Management
```javascript
// Add to admin interface
const handleImageUpload = async (file) => {
  const formData = new FormData();
  formData.append('image', file);
  
  const response = await fetch('/api/upload', {
    method: 'POST',
    body: formData,
  });
  
  const { imagePath } = await response.json();
  return imagePath;
};
```

### Phase 3: Add Rich Text Editing
```javascript
import dynamic from 'next/dynamic';

const QuillEditor = dynamic(() => import('react-quill'), {
  ssr: false,
});

// In your admin form
<QuillEditor
  value={description}
  onChange={setDescription}
  theme="snow"
/>
```

### Phase 4: Add User Authentication
```javascript
// Protect admin routes
import { getServerSession } from 'next-auth';

export async function GET(request) {
  const session = await getServerSession();
  
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  // Handle authenticated request
}
```

---

## Quick Start Guide

1. **Access the admin panel:**
   ```
   http://localhost:3000/admin
   ```

2. **Edit content directly:**
   - Open `src/data/artworks.json`
   - Open `src/data/siteContent.json`
   - Make changes and save

3. **Add new artwork:**
   - Go to admin panel
   - Click "Add New Artwork"
   - Fill in details
   - Upload image to `/public/images/artworks/[category]/`
   - Set image path in form

4. **Update site content:**
   - Go to admin panel
   - Click "Site Content" tab
   - Edit hero text, about section, etc.
   - Click "Save Changes"

---

## File Management Tips

### Image Organization:
```
public/images/
├── artworks/
│   ├── vases/vase-1.jpg
│   ├── tea-sets/tea-set-1.jpg
│   ├── sculptures/sculpture-1.jpg
│   └── plates/plates-1.jpg
├── hero/hero.jpg
└── gallery/
    ├── workshop.jpg
    └── gallery.jpg
```

### Backup Strategy:
1. **JSON files** - Version controlled with Git
2. **Images** - Regular backup to cloud storage
3. **Database** (if using SQLite) - Daily exports

### Performance Optimization:
1. **Images** - Use Next.js Image component for optimization
2. **Content** - Static generation for better performance
3. **Caching** - Cache API responses when possible

---

This system gives you complete control over your content without external dependencies, while being simple enough to manage yourself! 