# 🔮 Naresh Pandit — Jyotish Website

## 🚀 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
# http://localhost:5173
```

## 🏗️ Production Build

```bash
npm run build
# Output: dist/ folder
```

## ☁️ Deploy to Vercel (Recommended)

```bash
# Option 1: Vercel CLI
npm i -g vercel
vercel

# Option 2: Vercel Dashboard
# 1. Go to vercel.com
# 2. Import GitHub repo
# 3. Framework: Vite
# 4. Build: npm run build
# 5. Output: dist
# 6. Deploy ✅
```

## 🌐 Deploy to Netlify

```bash
# Option 1: Netlify CLI
npm i -g netlify-cli
netlify deploy --prod --dir=dist

# Option 2: Drag & Drop
# 1. Run: npm run build
# 2. Go to netlify.com/drop
# 3. Drag & drop the dist/ folder
```

## 📁 Project Structure

```
nareshpandit/
├── public/
├── src/
│   ├── assets/
│   │   ├── logo.png
│   │   ├── hero-bg.png
│   │   ├── pandit-photo1.jpg
│   │   └── pandit-photo2.png
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── WhatsAppFloat.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   ├── Testimonials.jsx
│   │   ├── CTAStrip.jsx
│   │   ├── FAQ.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   └── siteContent.js  ← All editable content
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## ✏️ Editing Content

All website text, services, FAQs, testimonials are in:
`src/data/siteContent.js`

Edit this file to update any content without touching components.

## 📧 Update Email

In `src/data/siteContent.js`, update:
```js
email: 'nareshrawal.jyotish@gmail.com',
```

## 🌐 Custom Domain

After deploying to Vercel/Netlify:
1. Go to domain settings
2. Add custom domain: `nareshpandit.com`
3. Update DNS records at your domain registrar
4. SSL auto-configured ✅
