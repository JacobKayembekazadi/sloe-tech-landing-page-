# Public Assets Directory

This folder contains static assets (images, videos, fonts, etc.) that are served directly without processing.

## Usage

Files in this directory are served from the root path `/`. 

For example:
- `public/logo.gif` → accessible at `/logo.gif`
- `public/images/hero.jpg` → accessible at `/images/hero.jpg`
- `public/videos/demo.mp4` → accessible at `/videos/demo.mp4`

## In Your Code

Reference assets using absolute paths:

```jsx
// ✅ Correct
<img src="/logo.gif" alt="Logo" />
<video src="/videos/demo.mp4" />

// ❌ Wrong
<img src="./public/logo.gif" alt="Logo" />
```

## Folder Structure (Example)

```
public/
├── logo.gif
├── images/
│   ├── hero.jpg
│   └── team/
│       └── member1.jpg
├── videos/
│   └── demo.mp4
└── fonts/
    └── custom-font.woff2
```




