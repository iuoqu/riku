# ✅ RiKU Ceramics Admin Checklist

## 🚀 **Getting Started**

### First Time Setup
- [ ] Run `npm install` to install dependencies
- [ ] Double-click `start-admin.bat` to start server
- [ ] Admin panel opens at http://localhost:3000/admin
- [ ] Website opens at http://localhost:3000

---

## 📝 **Daily Content Management**

### Before You Start
- [ ] Double-click `start-admin.bat` 
- [ ] Wait for server to start (shows "Ready" message)
- [ ] Admin panel opens automatically in browser

### Adding New Artwork
- [ ] Take high-quality photos (1200x1200px recommended)
- [ ] Save images to appropriate folder:
  - Vases: `public/images/artworks/vases/`
  - Tea Sets: `public/images/artworks/tea-sets/`
  - Sculptures: `public/images/artworks/sculptures/`
  - Plates: `public/images/artworks/plates/`
- [ ] Go to admin panel
- [ ] Click "Add New Artwork"
- [ ] Fill in all fields:
  - [ ] Title
  - [ ] Category (select from dropdown)
  - [ ] Image path (e.g., `/images/artworks/vases/your-image.jpg`)
  - [ ] Description
  - [ ] Dimensions
  - [ ] Price
  - [ ] Check "Available" if for sale
  - [ ] Check "Featured" to show on homepage
- [ ] Click "Save"
- [ ] Check website to see how it looks

### Editing Existing Content
- [ ] Find artwork in admin panel
- [ ] Click "Edit" button
- [ ] Make changes
- [ ] Click "Save"
- [ ] Preview on website

### Updating Site Content
- [ ] Go to "Site Content" tab
- [ ] Edit hero section, about text, contact info
- [ ] Click "Save Changes"
- [ ] Check homepage for changes

---

## 🚀 **Publishing Changes**

### Option 1: Use Batch Script (Easiest)
- [ ] Double-click `publish.bat`
- [ ] Enter commit message (or press Enter for default)
- [ ] Wait for completion
- [ ] Check live website in 1-2 minutes

### Option 2: Manual Commands
- [ ] Open Command Prompt in project folder
- [ ] Run: `git add .`
- [ ] Run: `git commit -m "Your message here"`
- [ ] Run: `git push origin main`
- [ ] Check live website in 1-2 minutes

---

## 🖼️ **Image Management**

### Before Adding Images
- [ ] Resize to correct dimensions:
  - Artworks: 1200x1200px (square)
  - Hero: 1920x1080px (landscape)
  - Gallery: 1200x800px (landscape)
- [ ] Compress to under 1MB
- [ ] Use descriptive filenames
- [ ] Save in JPG format

### File Naming Convention
- [ ] Use lowercase letters
- [ ] Use hyphens instead of spaces
- [ ] Include year if helpful
- [ ] Examples:
  - `spring-vase-2024.jpg`
  - `ceramic-tea-set-blue.jpg`
  - `abstract-sculpture-modern.jpg`

---

## 🔍 **Testing & Quality Check**

### Before Publishing
- [ ] Check all images load correctly
- [ ] Verify text formatting looks good
- [ ] Test on different screen sizes
- [ ] Check that featured artworks appear on homepage
- [ ] Ensure contact information is correct

### After Publishing
- [ ] Visit live website: https://your-site.vercel.app
- [ ] Check new content appears correctly
- [ ] Test on mobile device
- [ ] Share with others for feedback

---

## 🛠️ **Troubleshooting**

### Server Won't Start
- [ ] Close all Command Prompt windows
- [ ] Double-click `start-admin.bat` again
- [ ] Wait 30 seconds for startup
- [ ] Check http://localhost:3000/admin manually

### Images Not Showing
- [ ] Check file path starts with `/images/`
- [ ] Verify file exists in correct folder
- [ ] Check filename spelling (case-sensitive)
- [ ] Refresh browser

### Changes Not Saving
- [ ] Check browser console for errors (F12)
- [ ] Make sure server is still running
- [ ] Try refreshing admin panel
- [ ] Re-enter information if needed

### Git/Publishing Issues
- [ ] Check internet connection
- [ ] Run `git status` to see changes
- [ ] Try `publish.bat` again
- [ ] Contact support if persistent issues

---

## 📅 **Regular Maintenance**

### Weekly
- [ ] Add new artwork if available
- [ ] Update featured items
- [ ] Check all images load properly
- [ ] Review contact information

### Monthly
- [ ] Update hero image for seasons/events
- [ ] Review and update about section
- [ ] Archive sold artworks (set Available = false)
- [ ] Backup important images

### Quarterly
- [ ] Review all content for accuracy
- [ ] Update pricing if needed
- [ ] Add new categories if expanding
- [ ] Consider site improvements

---

## 🎯 **Quick Reference**

| Task | Steps |
|------|-------|
| **Start Admin** | Double-click `start-admin.bat` |
| **Add Artwork** | Admin → Add New Artwork → Fill form → Save |
| **Edit Content** | Admin → Edit item → Modify → Save |
| **Publish** | Double-click `publish.bat` |
| **View Live Site** | https://your-site.vercel.app |

---

**Remember**: Changes save locally first, then publish to go live! 🚀 