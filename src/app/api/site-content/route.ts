import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const contentPath = path.join(process.cwd(), 'src/data/siteContent.json');

export async function GET() {
  try {
    const fileContents = fs.readFileSync(contentPath, 'utf8');
    const content = JSON.parse(fileContents);
    return NextResponse.json(content);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read site content' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const newContent = await request.json();
    
    // Write to file
    fs.writeFileSync(contentPath, JSON.stringify(newContent, null, 2));
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to save site content' }, { status: 500 });
  }
} 