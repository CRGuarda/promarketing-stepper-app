This is a [Next.js](https://nextjs.org/) project with Tailwind CSS and Typescript bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

If you want check my repo, you will need start on `src/app/page.tsx`. The `layout.tsx` only have the next/font import for Poppins font and the metadata for Title and Description of the page.

## Learn More

By default are 5 Steps and the initialStep is 0 (first step). You can change this on `page.tsx`.

This (**basic**) project is builded with React components (I didn't use third-party libraries for the logic of the Stepper).

I purposely didn't use FontAwesome as the SVG is needed in detail to be able to try to give the steps dynamic transitions.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Poppins, a custom Google Font.
