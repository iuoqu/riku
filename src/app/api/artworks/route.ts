import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const artworksPath = path.join(process.cwd(), 'src/data/artworks.json');

export async function GET() {
  try {
    const fileContents = fs.readFileSync(artworksPath, 'utf8');
    const artworks = JSON.parse(fileContents);
    return NextResponse.json(artworks);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read artworks' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const newArtwork = await request.json();
    
    // Read existing artworks
    const fileContents = fs.readFileSync(artworksPath, 'utf8');
    const artworks = JSON.parse(fileContents);
    
    // Check if updating existing or adding new
    const existingIndex = artworks.findIndex((artwork: any) => artwork.id === newArtwork.id);
    
    if (existingIndex !== -1) {
      // Update existing
      artworks[existingIndex] = newArtwork;
    } else {
      // Add new
      artworks.push(newArtwork);
    }
    
    // Write back to file
    fs.writeFileSync(artworksPath, JSON.stringify(artworks, null, 2));
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to save artwork' }, { status: 500 });
  }
} 