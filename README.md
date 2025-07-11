# RiKU Ceramics Website

A modern, responsive website for RiKU Ceramics, showcasing unique porcelain pieces that blend tradition with contemporary design.

## Features

- Responsive design that works on all devices
- Modern, clean aesthetics
- Product catalog with filtering capabilities
- Contact form for inquiries
- Image gallery of ceramic works

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- React 18

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/riku-ceramics.git
cd riku-ceramics
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
riku-ceramics/
├── src/
│   ├── app/
│   │   ├── page.tsx            # Home page
│   │   ├── artworks/
│   │   │   └── page.tsx        # Artworks catalog
│   │   ├── contact/
│   │   │   └── page.tsx        # Contact page
│   │   └── layout.tsx          # Root layout
│   └── components/
│       └── layout/
│           ├── Header.tsx      # Site header
│           └── Footer.tsx      # Site footer
├── public/
│   └── images/                 # Image assets
└── package.json
```

## Deployment

This site is deployed on Vercel. Each push to the main branch will trigger a new deployment.

## License

MIT License - feel free to use this code for your own projects. 