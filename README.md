# Prime Associates, Layyah

One-page website for **Prime Associates Tax, Legal & Corporate Consultants**, near Qadir Ali Hospital, Ghora Chowk, Layyah.

Built with React 19, Vite and Tailwind CSS v4. The page is prerendered to static HTML at build time, so search engines see the full content and JSON-LD (`LegalService` + `FAQPage`). React then hydrates it for the interactive parts.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The output goes to `dist/`. It is a plain static site and can be hosted on Cloudflare Pages, Netlify, Vercel, GitHub Pages or any shared host (upload the contents of `dist/`).

| Setting          | Value           |
| ---------------- | --------------- |
| Build command    | `npm run build` |
| Output directory | `dist`          |
| Node version     | 20 or newer     |

## Editing content

All text lives in `src/data.js`:

- `CONTACT`: phone numbers, email, address, office hours, Facebook page
- `SERVICES`: service cards (English + Urdu)
- `TEAM`: profiles and social links
- `FAQS`: FAQ answers. The same data also feeds the FAQ schema.

Tax figures in the FAQ follow the Finance Act 2026 and FBR's Withholding Tax Rate Card for Tax Year 2027. Review them after each federal budget.

## After going live

Once the domain is connected, add these to `index.html`:

- `<link rel="canonical" href="https://your-domain/">`
- an absolute `og:image` URL (`https://your-domain/og-image.jpg`)

Then add the domain to Google Search Console.
