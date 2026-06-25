# MyPortfolio

VS Code inspired portfolio built with Next.js + TypeScript + Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Structure

```
MyPortfolio/
├── public/
│   ├── resume/Lia_Pitero_CV.pdf   # downloaded by CV button
│   └── gallery/                   # drop your photos here
└── src/
    ├── app/
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx
    ├── components/
    │   ├── ActivityBar.tsx
    │   ├── CodeView.tsx
    │   ├── Explorer.tsx
    │   ├── SearchPanel.tsx
    │   ├── StatusBar.tsx
    │   ├── Tabs.tsx
    │   └── views/
    │       ├── AboutMe.tsx
    │       ├── CV.tsx
    │       ├── Experiences.tsx
    │       ├── Gallery.tsx
    │       ├── MyProjects.tsx
    │       └── TechStack.tsx
    └── data/
        ├── aboutme.json
        ├── experiences.ts
        ├── gallery.ts
        ├── myprojects.ts
        ├── socials.ts
        └── techstack.js
```

## Add gallery photos

Place your images at `public/gallery/photo1.jpg`, `photo2.jpg`, etc. Then update
the `src` paths in `src/data/gallery.ts` and replace the placeholder gradient
with an `<img>` tag inside `src/components/views/Gallery.tsx` if you want real
images shown.
