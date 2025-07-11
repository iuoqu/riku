import { NextRequest, NextResponse } from 'next/server';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const REPO_OWNER = 'iuoqu'; // Your GitHub username
const REPO_NAME = 'riku';   // Your repository name

export async function POST(request: NextRequest) {
  try {
    const { filePath, content, message } = await request.json();
    
    if (!GITHUB_TOKEN) {
      return NextResponse.json({ error: 'GitHub token not configured' }, { status: 500 });
    }

    // Get current file to get SHA
    const getResponse = await fetch(
      `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${filePath}`,
      {
        headers: {
          'Authorization': `token ${GITHUB_TOKEN}`,
          'Accept': 'application/vnd.github.v3+json',
        },
      }
    );

    let sha;
    if (getResponse.ok) {
      const fileData = await getResponse.json();
      sha = fileData.sha;
    }

    // Update file
    const updateResponse = await fetch(
      `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${filePath}`,
      {
        method: 'PUT',
        headers: {
          'Authorization': `token ${GITHUB_TOKEN}`,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: message || 'Update content via admin panel',
          content: btoa(JSON.stringify(content, null, 2)),
          sha: sha,
        }),
      }
    );

    if (updateResponse.ok) {
      return NextResponse.json({ success: true });
    } else {
      const error = await updateResponse.text();
      return NextResponse.json({ error }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update via GitHub API' }, { status: 500 });
  }
} 