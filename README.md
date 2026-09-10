# Glow Beauty Studio — Website

A premium, multi-page beauty salon website built with React, Vite, Tailwind
CSS and React Router DOM.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL shown in your terminal (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
├── components/     Reusable UI: Navbar, Footer, Button, ServiceCard, etc.
├── pages/          One component per route (Home, About, Services, ...)
├── data/
│   └── salonData.js   ← ALL business content lives here
├── hooks/
│   └── usePageTitle.js
├── App.jsx          Routes are defined here
├── main.jsx          App entry point
└── index.css         Tailwind + global styles
```

## Reusing this for another salon

Everything specific to the business — name, address, phone, WhatsApp
number, hours, services, prices, gallery images and testimonials — is
centralized in `src/data/salonData.js`. To rebrand this site for a
different salon, edit that file only; no component code needs to change.

Key things to update:

- `business.name`, `business.address`, `business.phone`, `business.whatsapp`
- `business.mapsEmbedUrl` — replace with the client's actual Google Maps
  embed URL (Google Maps → Share → Embed a map → copy the `src` URL)
- `services` — array of services, prices and images
- `galleryImages` — portfolio photos
- `testimonials` — client reviews
- Colors — edit the palette in `tailwind.config.js` under `theme.extend.colors`

## Notes

- Gallery, testimonial and service images currently use Unsplash stock
  photography as placeholders — swap in the client's real photography
  before launch.
- WhatsApp buttons open `wa.me` with a pre-filled message defined in
  `whatsappLink()` inside `salonData.js`.
- The contact form opens WhatsApp with the filled-in details rather than
  submitting to a backend — wire it up to an email/API service if the
  client wants form submissions instead.
