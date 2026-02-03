This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

# Development Log

## 2/2 Monday

### 1. Top Bar & Layout Refinement
- **Top Bar**:
  - Removed legacy header and search bar.
  - Implemented pixel-perfect tabs (Matched, Liked, Applied) with Lime `#B7FD33` badges.
  - Aligned dimensions and spacing to Figma specs.
  - Ensured `#FFFFFF` background consistency across Top Bar and Sidebar.
- **Global Layout**:
  - Set global page background to `#FFFFFF`.
  - Moved `RecommendedList` into a new absolute container ("Future Job Box": 870x739px).

### 2. New UI Components
- **Job Reference Label**:
  - Added "Change Job Reference" floating label.
  - Implemented custom **Refresh SVG Icon** with exact vector paths.
- **Top Matched Button**:
  - Added "Top matched" button at `left-[950px]`.
  - Implemented **Hover Interaction**: Shows Lime `#B7FD33` border on hover.
  - Integrated custom **Document & Lens SVG Icon**.
- **Right Sidebar Panel**:
  - Implemented "Ace Your Interviews" panel (290x790px).
  - Added **Eclipse Gradient Background**:
    - 3-Stop Gradient: Sky Blue (40%) → Purple (50%) → Pink (30%).
    - Blur Effect: `100px` contained via `overflow-hidden`.
  - Removed drop shadows and borders for a clean look.

### Key Challenges & Design Decisions
- **Pixel-Perfect Vector Implementation**:
  - Converting Figma vector paths to explicit SVG `d` commands was crucial for the *Refresh* and *Top Matched* icons. Approximations were insufficient; exact coordinates were required for the crisp, professional look.
- **Absolute vs. Grid Layout**:
  - Shifted from a flexible CSS Grid to precise absolute positioning for the main content ("Future Job Box") and Right Sidebar. This decision prioritized exact design fidelity over responsive flexibility for this specific desktop view.
- **Sophisticated Visual Effects**:
  - **Gradient Tuning**: Calculated specific opacity values (Sky 0.4 / Purple 0.5 / Pink 0.3) to achieve a "dreamy" aesthetic without over-saturation.
  - **Blur Containment**: Addressed the issue of blur bleeding by enforcing `overflow-hidden` on the panel container, keeping the focus contained.
- **Interaction Refinement**:
  - Implemented `border-transparent` -> `border-lime` transitions to prevent UI jitters during hover states, ensuring a smooth user experience.
