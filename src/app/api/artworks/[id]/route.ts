import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const artworksPath = path.join(process.cwd(), 'src/data/artworks.json');

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id);
    
    // Read existing artworks
    const fileContents = fs.readFileSync(artworksPath, 'utf8');
    const artworks = JSON.parse(fileContents);
    
    // Filter out the artwork to delete
    const updatedArtworks = artworks.filter((artwork: any) => artwork.id !== id);
    
    // Write back to file
    fs.writeFileSync(artworksPath, JSON.stringify(updatedArtworks, null, 2));
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete artwork' }, { status: 500 });
  }
} 