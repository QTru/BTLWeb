# Proposed React/Vite Structure

```text
.
├── index.html
├── package.json
├── vite.config.js
├── src
│   ├── main.jsx
│   ├── App.jsx
│   ├── styles.css
│   ├── components
│   │   └── LegacyHtmlPage.jsx
│   └── pages
│       ├── HomePage.jsx
│       ├── CartPage.jsx
│       ├── AboutPage.jsx
│       ├── ContactPage.jsx
│       ├── RegisterPage.jsx
│       ├── FaqPage.jsx
│       ├── DeliveryReturnPage.jsx
│       ├── PolicyPage.jsx
│       ├── SwimwearCategoryPage.jsx
│       ├── AccessoriesCategoryPage.jsx
│       ├── DiscountCategoryPage.jsx
│       ├── SwimwearDetailPage.jsx
│       ├── AccessoriesDetailPage.jsx
│       └── DiscountDetailPage.jsx
└── docs
    ├── mapping-inventory.md
    ├── mapping-pages.md
    ├── qa-checklist.md
    └── screenshots/
```

## Decision notes

- Chosen root-level Vite setup (no `frontend/`) to preserve existing legacy asset paths and reduce path rewrites.
- Legacy HTML/CSS/JS are preserved as source-of-truth and loaded through React route pages for parity.
- Bootstrap + Font Awesome are consumed from original legacy references at page-level.
- Minimal React wrapper architecture is used to keep behavior/output identical while still providing React Router multi-page structure.
