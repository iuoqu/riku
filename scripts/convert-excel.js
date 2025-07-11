const xlsx = require('xlsx');
const fs = require('fs');
const path = require('path');

// Read the Excel file
const workbook = xlsx.readFile(path.join(__dirname, '../uploaddata712.xlsx'));
const worksheet = workbook.Sheets[workbook.SheetNames[0]];
const data = xlsx.utils.sheet_to_json(worksheet);

// Helper function to clean up description text
const cleanDescription = (desc) => {
  if (!desc) return '';
  return desc.replace(/\r\n/g, '\n').trim();
};

// Helper function to parse dimensions
const parseDimensions = (dims) => {
  if (!dims) return '';
  const [height, diameter, bottom, length] = dims.split('/').map(d => d.trim());
  const parts = [];
  if (height) parts.push(`Height: ${height}cm`);
  if (diameter) parts.push(`Diameter: ${diameter}cm`);
  if (bottom) parts.push(`Bottom: ${bottom}cm`);
  if (length) parts.push(`Length: ${length}cm`);
  return parts.join(' | ');
};

// Map categories to our standard categories
const categoryMap = {
  'Tea Cup': 'Tea Cup Sets',
  'Coffee Mug': 'Coffee Mugs',
  'Decoration': 'Decoration'
};

// Get today's date in YYYY-MM-DD format
const today = new Date().toISOString().split('T')[0];

// Convert Excel data to our JSON format
const artworks = data.map(item => ({
  id: item.id || '',
  title: item.title || '',
  category: categoryMap[item.category] || item.category || '',
  image: `/images/artworks/${(categoryMap[item.category] || item.category || '').toLowerCase().replace(/ /g, '-')}/${item.id.toLowerCase()}.jpg`,
  description: cleanDescription(item['description '] || ''),
  dimensions: parseDimensions(item['dimensions (height/diameter/bottom diameter/length including handle)']),
  price: item['price(USD)'] ? `$${item['price(USD)'].toFixed(2)}` : '',
  available: item.availible === 1,
  featured: item.featured === 1,
  dateCreated: today
}));

// Write to JSON file
fs.writeFileSync(
  path.join(__dirname, '../src/data/artworks.json'),
  JSON.stringify(artworks, null, 2)
);

console.log('Conversion complete! Check src/data/artworks.json for the result.'); 