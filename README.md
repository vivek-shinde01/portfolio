# Vivek Shinde - Personal Portfolio Website

A clean, animated personal portfolio website built from scratch using pure **HTML**, **CSS**, and **JavaScript** — no frameworks, no build tools. Fully mobile responsive.

---

## 🌐 Live Demo

> [https://vivekshinde.dev](https://vivekshinde.dev)

---

## 📸 Preview

| Desktop | Mobile |
|---------|--------|
| ![Desktop Preview](preview-desktop.png) | ![Mobile Preview](preview-mobile.png) |

---

## ✨ Features

- **Scroll animations** — Elements fade and slide in as you scroll, each firing only once
- **Hero section** — Animated CSS grid lines, floating particles, glowing orbs, shimmer text effect
- **Mobile menu** — Compact top dropdown menu with smooth animation, closes automatically on link click
- **Skills section** — Tag-chip grid with staggered entrance animation
- **Services cards** — Hover lift effect with gradient reveal underline
- **Project cards** — Dark themed cards with hover elevation
- **Contact form** — Fully functional form with success feedback
- **Social links** — Email, Instagram, GitHub, LinkedIn with branded icons
- **Resume download** — Direct CV download button in hero and mobile menu

---

## 🗂️ Project Structure

```
portfolio/
├── index.html       # Main HTML structure
├── style.css        # All styles, animations, responsive breakpoints
├── script.js        # Scroll animations, particles, mobile menu, form
└── resume.pdf       # Your CV (add this file yourself)
```

---

## 🚀 Getting Started

### Run locally

```bash
# 1. Clone the repo
git clone https://github.com/vivekshinde/portfolio.git

# 2. Open in browser
cd portfolio
open index.html
```

No npm, no dependencies, no build step — just open and go.

### Deploy to GitHub Pages

1. Push code to a GitHub repository
2. Go to **Settings → Pages**
3. Set source to **main branch / root**
4. Your site will be live at `https://yourusername.github.io/portfolio`

---

## 🛠️ Tech Stack

| Technology | Usage |
|-----------|-------|
| HTML5 | Semantic structure |
| CSS3 | Animations, grid, flexbox, responsive design |
| Vanilla JavaScript | IntersectionObserver, DOM manipulation |
| Google Fonts | Playfair Display + Inter |
| Remix Icons | Footer heart icon |

---

## 📁 Sections

| # | Section | Description |
|---|---------|-------------|
| 1 | **Hero** | Name, tagline, CTA buttons, resume download |
| 2 | **About** | Bio, skill pills, brief introduction |
| 3 | **Services** | Web Dev, App Dev, Meta Ads, SEO |
| 4 | **Skills** | Frontend, Backend, Tools & DevOps tag grid |
| 5 | **Projects** | ShopNow, SentimentAI, Harshali Academy |
| 6 | **Contact** | Social links + contact form |

---

## 🎨 Customisation

To make this portfolio your own, update the following in `index.html`:

```
Name          →  Search "Vivek Shinde" → replace with your name
Email         →  Search "abc@example.com" → your email
Instagram     →  Search "@abc_dev" → your handle
GitHub        →  Search "github.com/abc" → your profile
LinkedIn      →  Search "linkedin.com/in/abc" → your profile
Resume        →  Replace resume.pdf with your actual CV file
Projects      →  Update project titles, descriptions, and links
Skills        →  Add/remove .sk-tag elements in the skills section
```

To change the accent color, update this single CSS variable in `style.css`:

```css
:root {
  --accent: #16a085;   /* change to any hex color */
  --gold:   #e8a23c;   /* secondary highlight color */
}
```

---

## 📱 Browser Support

| Browser | Support |
|---------|---------|
| Chrome 90+ | ✅ Full |
| Firefox 88+ | ✅ Full |
| Safari 14+ | ✅ Full |
| Edge 90+ | ✅ Full |
| IE | ❌ Not supported |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgements

- Fonts: [Google Fonts](https://fonts.google.com)
- Icons: [Remix Icons](https://remixicon.com)

---

<p align="center">Made with ❤️ by <a href="https://github.com/vivekshinde">Vivek Shinde</a></p>
