# Carewell Clinic — Project Documentation

> **Compassionate Care. Better Health.**

---

## Overview

Carewell Clinic is a premium, single-page healthcare website designed to establish trust, communicate services, and drive patient appointment bookings. The site targets potential patients seeking personalized, patient-centered healthcare.

---

## Tech Stack

| Layer        | Technology                                      |
| ------------ | ----------------------------------------------- |
| **Markup**   | Semantic HTML5                                  |
| **Styling**  | Vanilla CSS (embedded `<style>`)                |
| **Scripts**  | Vanilla JavaScript (embedded `<script>`)        |
| **Fonts**    | Google Fonts — *Gloock* (headings), *Golos Text* (body) |
| **Icons**    | Font Awesome 6.5 (CDN)                          |
| **Images**   | Unsplash (hotlinked via `auto=format&fit=crop`) |

No build tools, frameworks, or package managers are required. The entire site ships as a single `.html` file.

---

## File Structure

```
New folder/
├── index.html   ← Main website (all HTML, CSS, JS in one file)
└── project.md         ← This documentation
```

---

## Design System

### Color Palette

| Token          | Value                      | Usage                          |
| -------------- | -------------------------- | ------------------------------ |
| `--primary`    | `#004636` (deep forest)    | Brand color, headings, nav     |
| `--accent`     | `#D2B168` (warm gold)      | CTAs, highlights, icons        |
| `--white`      | `#FFFFFF`                  | Backgrounds, light text        |
| `--black`      | `#000000`                  | Shadow bases                   |

Each color includes opacity variants (e.g., `--primary-85`, `--accent-40`) for layered depth effects.

### Typography

| Role     | Font Family | Weight(s)        |
| -------- | ----------- | ---------------- |
| Headings | Gloock      | 400 (serif)      |
| Body     | Golos Text  | 400, 500, 600, 700 |

### Spacing & Radii

- **Container max-width:** `1240px`
- **Section padding:** `100px` vertical / `70px` (tight variant)
- **Border radii:** `6px` (sm) · `14px` (md) · `28px` (lg)

### Shared Components

- **`.btn`** — Pill-shaped buttons with hover lift. Variants: `btn-primary`, `btn-outline`, `btn-dark`, `btn-ghost-dark`.
- **`.eyebrow`** — Gold label with leading dash, used above section headings.
- **`.heading`** — Fluid-type section title (`clamp(2rem, 3.6vw, 2.75rem)`).
- **`.reveal`** — Scroll-triggered fade-in animation class.

---

## Page Sections

| #  | Section              | ID / Class           | Description                                               |
| -- | -------------------- | -------------------- | --------------------------------------------------------- |
| 1  | Announcement Bar     | `.announcement`      | Rotating text banner with booking CTA                     |
| 2  | Header / Navigation  | `#siteHeader`        | Sticky nav with logo, links, phone, CTA; mobile hamburger |
| 3  | Hero                 | `#home`              | Split grid — headline + image with floating stat cards    |
| 4  | Trust Strip          | `.trust-strip`       | 4-column icon + text credibility row                      |
| 5  | About                | `#about`             | Image + copy grid with badge overlay                      |
| 6  | Statistics           | `.stats`             | 4 animated counters on dark background                    |
| 7  | Services             | `#services`          | 3-column card grid with hover effects                     |
| 8  | Featured Checkup     | `.split-section`     | Alternating image/copy split layout                       |
| 9  | Doctors              | `#doctors`           | 4-column doctor profile cards                             |
| 10 | Why Choose Us        | `.why-list`          | Numbered benefits list                                    |
| 11 | How It Works         | `.steps-wrap`        | 4-step process with connected timeline                    |
| 12 | Appointment Form     | `#appointment`       | Full booking form with client-side validation             |
| 13 | Resources            | `#resources`         | 4-column resource/download cards                          |
| 14 | Testimonials         | `.testimonials`      | 3-slide carousel with dots & arrows                       |
| 15 | FAQ                  | `.faq-list`          | Accordion with image sidebar                              |
| 16 | Emergency Notice     | `.emergency`         | Dark banner with phone CTA                                |
| 17 | Contact              | `#contact`           | Info list + map placeholder + contact form                |
| 18 | Final CTA            | `.cta-panel-wrap`    | Centered call-to-action panel                             |
| 19 | Footer               | `.site-footer`       | 4-column footer with social links & legal                 |
| 20 | Scroll to Top        | `.scroll-top`        | Fixed button, visible after scroll threshold              |

---

## Responsive Breakpoints

| Breakpoint   | Target                                     |
| ------------ | ------------------------------------------ |
| `≤ 1200px`   | Services grid → 2 columns                  |
| `≤ 1100px`   | Doctors grid → 2 columns                   |
| `≤ 960px`    | Mobile nav drawer; hero → single column    |
| `≤ 900px`    | Most grids collapse to 1 column            |
| `≤ 640px`    | Testimonial carousel → 1 slide             |
| `≤ 560px`    | Compact form padding; footer → 1 column    |

Supports `prefers-reduced-motion` to disable animations for accessibility.

---

## Accessibility

- **Skip link** (`#main-content`) for keyboard users
- **Semantic landmarks** — `<header>`, `<main>`, `<nav>`, `<section>`, `<footer>`
- **ARIA attributes** — `aria-label`, `aria-expanded`, `aria-controls`, `aria-live` (announcement bar)
- **Focus-visible** outline using accent color
- **Decorative icons** marked `aria-hidden="true"`
- **Screen reader utility** — `.sr-only` class

---

## Interactive Features

| Feature                | Implementation                                          |
| ---------------------- | ------------------------------------------------------- |
| Announcement rotator   | JS interval cycling `.is-active` class on text spans    |
| Sticky header shadow   | Scroll listener adds `.scrolled` class                  |
| Mobile navigation      | Hamburger toggles `.is-open` on nav + overlay           |
| Scroll reveal          | Intersection Observer adds `.is-visible` to `.reveal`   |
| Stat counter animation | Counts up on scroll into view                           |
| Testimonial carousel   | Manual prev/next + dot navigation, per-slide translate  |
| FAQ accordion          | Click toggles `.open` class, `max-height` transition    |
| Form validation        | Client-side field checks with inline error messages     |
| Scroll to top          | Fixed button appears after 400px scroll                 |

---

## Development Notes

### Running Locally
Simply open `index.html` in any modern browser — no server required.

### Editing
All code lives in a single file:
- **CSS** is inside `<style>` tags in `<head>` (lines 14–676)
- **HTML** is the `<body>` content
- **JavaScript** is at the end of `<body>` in `<script>` tags

### Image Dependencies
All images are hotlinked from Unsplash. For production, download and self-host images to avoid external dependency and improve loading performance.

### Suggested Improvements
- [x] Rename homepage file to `index.html`
- [ ] Extract CSS into a separate `styles.css` file
- [ ] Extract JS into a separate `main.js` file
- [ ] Self-host images and optimize with WebP format
- [ ] Add Open Graph / Twitter Card meta tags for social sharing
- [ ] Implement a backend for the appointment & contact forms
- [ ] Add a favicon and `manifest.json` for PWA support

---

## License

This project is for demonstration / educational purposes. Unsplash images are subject to the [Unsplash License](https://unsplash.com/license).

