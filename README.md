## Frontend Practical

This is a NextJS application, roughly styled by either SASS or TailwindCSS, and meant to be powered by the [FakeStore API](https://fakestoreapi.com/).

## Getting Started

Install dependencies:

```bash
npm i
# or
yarn
```

_(yarn was used to build the project, and might be most compatible)_

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tasks

There are several tasks available in this repo around basic styling and data fetching / rendering, available in the following routes:

One of the following will be chosen:
- `/`: Fetch and render categories
- `/{categorySlug}`: Fetch and render products within a category
- `/{categorySlug}/{productId}`: Fetch and render a product based on ID

Time permitting: Styling (SASS or Tailwind), loading states, and error states.

Styling Product Grid:
Something similar to this:
<img width="877" alt="Screen Shot 2023-03-15 at 10 17 23 AM" src="https://user-images.githubusercontent.com/4898984/225389280-12679ac8-3777-4c02-81b0-84d52cfa5d51.png">

