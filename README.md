# Łukasz Szymański — Multidisciplinary Portfolio

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live_Demo-szymanski.studio-00C7B7?style=for-the-badge&logo=google-chrome&logoColor=white)](https://szymanski.studio)
[![Built with Astro](https://img.shields.io/badge/Built__with-Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Styled__with-Tailwind-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

</div>

<p align="center">
  <img src="./public/screenshot.png" alt="Szymanski Studio Portfolio Mockup" width="90%" style="border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.4);" />
</p>

A modern, high-performance multidisciplinary portfolio website built for **[szymanski.studio](https://szymanski.studio)**. The platform is designed to showcase creative and technical work across three major disciplines: **Software Development**, **Classical Music**, and **Filmmaking/Composition**.

---

## 🌟 Key Features

*   **Multidisciplinary Bento Grid:** An interactive, glassmorphic card layout on the homepage allowing users to seamlessly transition between the Developer, Musician, and Filmmaker profiles.
*   **Full i18n Localization:** Dual-language support (**English & Polish**) with isolated routing paths (`/` and `/pl/`) and dictionary-based translations.
*   **Smart Locale Redirection:** Client-side detection automatically routes users to the Polish version if their browser language matches `pl-*`, persisting preference via `localStorage`.
*   **Performance & SEO Optimized:** Zero-JS by default rendering leveraging Astro's Static Site Generation (SSG). Integrates dynamic OpenGraph cards, schema markup, automatic sitemap generation, and clean canonical paths.
*   **Aesthetic & Modern UI:** Dark mode by default, custom micro-animations (e.g., interactive bento-card spotlight hover effects), and sleek responsive typography (Outfit & Inter).

---

## 🛠️ Tech Stack

| Technology | Purpose | Description |
| :--- | :--- | :--- |
| **[Astro v7.0](https://astro.build/)** | Static Site Generator | Powers high-performance static rendering and smart page routing. |
| **[Tailwind CSS v4.0](https://tailwindcss.com/)** | Styling | Provides rapid utility-first styling with modern CSS variables. |
| **[TypeScript](https://www.typescriptlang.org/)** | Type Safety | Enhances code quality and component interface definitions. |
| **[Lucide Astro](https://lucide.dev/)** | Iconography | High-quality, lightweight vector icons optimized for Astro. |
| **[Netlify](https://www.netlify.com/)** | Hosting | Global CDN hosting with automated continuous deployment (CI/CD). |

---

## 📁 Project Structure

```text
portfolio/
├── src/
│   ├── assets/       # Localized image and media assets
│   ├── i18n/         # UI dictionaries (ui.ts) and translation utils
│   ├── layouts/      # Base Page HTML Layout wrapper (Layout.astro)
│   ├── pages/        # Astro routing pages (multilingual structures)
│   │   ├── pl/       # Polish localized pages
│   │   └── ...       # Default English page views
│   └── styles/       # Global CSS stylesheets
├── public/           # Static files (favicon, sitemaps, screenshots)
├── astro.config.mjs  # Astro framework configuration (sitemap setup)
└── package.json      # Dependencies and execution scripts
```

---

## ⚙️ Development & Build Setup

### Prerequisites

Ensure you have **Node.js (>=22.12.0)** and npm installed.

### Commands

Run all commands from the root directory of the project using your terminal:

```bash
# 1. Install project dependencies
npm install

# 2. Start the local development server (runs on http://localhost:4321)
npm run dev

# 3. Build the production-ready static site (outputs to ./dist/)
npm run build

# 4. Preview the locally built production site
npm run preview
```

---

## 📝 Project Changelog

<details>
  <summary><strong>2026-07-01 (Version 1.2.0)</strong></summary>
  <br>

  *   **Feature:** Added a new **Film Music** (`/film-music`) page showcasing original soundtracks, ambient scores, and custom cinematic compositions.
  *   **i18n & Polish Support (Issue #1):**
      *   Extracted UI strings to `src/i18n/ui.ts` dictionaries.
      *   Added language switcher component to main navigation menus.
      *   Configured Astro i18n routing with automatic browser language detection.
  *   **UX Improvements:**
      *   Replaced strict viewport scrolling locks (`hideScroll={true}`) with natural scrolling for content-heavy sections.
      *   Removed fixed-height box constraints (`max-h-[75vh]`) and internal scrolls for superior mobile layouts.
  *   **SEO & Optimizations:** Added schema metadata, canonical link tags, and optimized video background assets.
</details>

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
