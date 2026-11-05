# Cassius Lennox Mercado — Virtual Assistant Portfolio

A clean, professional, and fully responsive portfolio website for a Virtual Assistant and E-Commerce Account Specialist.

---

## 📁 Project Structure

```
Virtual-Assistant-Portfolio/
├── index.html          ← Main HTML page
├── css/
│   └── style.css       ← All styling (dark theme, animations, layout)
├── js/
│   └── main.js         ← Particles, scroll animations, counters, navigation
├── assets/             ← Place any images or custom assets here
└── README.md           ← This file
```

---

## 🚀 How to Open Locally

1. Navigate to the project folder
2. Double-click **`index.html`** to open it in your browser
3. That's it — no build tools or server required!

---

## 🌐 How to Deploy Online (Free Options)

### Option A — GitHub Pages
1. Create a free GitHub account at https://github.com
2. Create a new repository named `portfolio` (or any name)
3. Upload all project files to the repository
4. Go to **Settings → Pages → Source → main branch**
5. Your site will be live at `https://yourusername.github.io/portfolio`

### Option B — Netlify (Drag & Drop)
1. Go to https://netlify.com and sign up free
2. Drag and drop the **entire `Virtual-Assistant-Portfolio` folder**
3. Netlify gives you a live URL instantly (e.g., `https://cassius-va.netlify.app`)

### Option C — Vercel
1. Go to https://vercel.com and sign up free
2. Import your GitHub repository
3. Vercel auto-deploys and gives you a live URL

---

## ✏️ How to Customize

| What to change          | Where to edit                     |
|-------------------------|-----------------------------------|
| Name / title / bio      | `index.html` — Hero & About sections |
| Contact info            | `index.html` — About facts & Contact section |
| Skills / experience     | `index.html` — Skills & Experience sections |
| Colors / fonts          | `css/style.css` — `:root` variables |
| Animations / behavior   | `js/main.js`                      |
| Profile photo           | Replace the `.avatar-inner` div with an `<img>` tag in `index.html` |

### Changing the colour theme
Open `css/style.css` and edit the `:root` variables at the top:

```css
:root {
  --clr-bg:       #0b0f1a;   /* Page background */
  --clr-primary:  #4f8ef7;   /* Blue accent */
  --clr-primary2: #7c5ef5;   /* Purple accent */
  --clr-accent:   #38e8c5;   /* Teal highlight */
}
```

### Adding a real profile photo
In `index.html`, find the `.avatar-inner` div and replace it:

```html
<!-- Before -->
<div class="avatar-inner">CLM</div>

<!-- After (add your photo to assets/ folder) -->
<img class="avatar-inner" src="assets/photo.jpg" alt="Cassius Lennox Mercado" style="object-fit:cover;" />
```

---

## 🎨 Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Smooth scroll-triggered fade-in animations
- ✅ Animated floating particle background
- ✅ Sticky navbar with mobile hamburger menu
- ✅ Active section highlight in navigation
- ✅ Animated stat counters
- ✅ Spinning avatar ring effect
- ✅ Vertical timeline for work history
- ✅ SEO meta tags included
- ✅ Accessible HTML (ARIA labels, semantic elements)
- ✅ No dependencies — pure HTML, CSS, and JavaScript

---

## 📄 License

Personal portfolio — all rights reserved to Cassius Lennox Mercado.
