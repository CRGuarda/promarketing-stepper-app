This is a [Next.js](https://nextjs.org/) project with Tailwind CSS and Typescript bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This project is deployed on [Vercel](https://stepper-app.vercel.app/).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

If you want check my repo, you will need start on `src/app/page.tsx`.

The `layout.tsx` only have the necessary config for FA CSS on SSR and `next/font` import for Poppins font and the metadata for Title and Description of the page.

## Learn More

By default are 5 Steps and the initialStep is 0 (first step). You can change this on `page.tsx`.

This (**basic**) project is builded with React components [I didn't use third-party libraries for the logic of the Stepper, except for Font Awesome (FA) React Library].

The Stepper Component have a SucceededIcon prop for a custom Succeeded Icon, by default have a `fa-check` icon.

The Step component can have a number, string, FA Icon Component or null children.

You can find a comment on `page.tsx` inside of Stepper Component, is an example for a custom Succeeded Icon (for the example I'm using `fa-House` icon). This Stepper only accepts FA Icons from `@fortawesome/free-solid-svg-icons`.

If you are using custom styles on your FA Icon children on the Step Component, the color of the icon is not going to change On Active transition. This feature is not completed yet.

Please contact me if you encountered any bugs. :)

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Poppins, a custom Google Font.
