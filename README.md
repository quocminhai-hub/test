# AI Academy Premium Landing Page

React + Vite + Tailwind CSS v4 + Framer Motion + Lucide React.

## Local development

Requirements: Node.js 20+ recommended.

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The production output is generated in `dist/`.

## Deploy to Vercel

### Option A — Vercel dashboard
1. Upload this project to GitHub.
2. In Vercel, choose **Add New Project**.
3. Import the GitHub repository.
4. Vercel should detect Vite automatically.
5. Build command: `npm run build`
6. Output directory: `dist`
7. Deploy.

### Option B — Vercel CLI

```bash
npm install -g vercel
vercel
```

For production:

```bash
vercel --prod
```

## Customize

Main page:
- `src/App.jsx`

Global styles:
- `src/index.css`

Metadata/title:
- `index.html`

Replace the placeholder `mailto:hello@example.com` checkout link with your real checkout/payment URL.
