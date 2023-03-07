import Head from "next/head";
import Task from "../components/Task";

import styles from "../styles/Home.module.css";

type CategoriesResponse = string[];

export default function Home() {
  // Task: fetch categories from API and render as a list here
  // https://fakestoreapi.com/products/categories
  const getCategories = (): CategoriesResponse => [
    "category-1",
    "category-2",
    "category-3",
    "category-4",
  ];

  const categories = getCategories();

  return (
    <>
      <Head>
        <title>Fake Store</title>
        <meta
          name="description"
          content="A Fake Store powered by the open FakeStoreAPI"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="p-4">
        <h1 className="text-3xl font-bold">Welcome to Fake Store</h1>

        <Task>
          <li>Fetch categories from the API</li>
          <li>Render as a list here</li>
          <li>
            Each item should link to{" "}
            <code className="bg-gray-300">{"/{category}"}</code>
          </li>
          <li>Style as a horizontal list</li>
        </Task>

        <section className="pt-10">
          <div className="">
            <h2
              id="category-heading"
              className="text-2xl font-bold tracking-tight text-gray-900"
            >
              Shop by Category
            </h2>
          </div>

          <div className="mt-4">
            <div className="">
              {categories.map((category) => (
                <div key={category}>{category}</div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
