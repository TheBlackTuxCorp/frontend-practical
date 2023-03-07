import { useRouter } from "next/router";
import Task from "../../components/Task";
import { Product } from "../../types";

const CategoryPage = () => {
  const { query } = useRouter();

  // Task: Fetch the products in the given category from the API
  // https://fakestoreapi.com/products/category/{categorySlug}
  const getProducts = (): Product[] => [];

  const products = getProducts();

  return (
    <>
      <h2 className="text-2xl font-bold text-red-600">{query.categorySlug}</h2>

      <Task>
        <li>Fetch the products for the given category.</li>
        <li>Render the products as product cards with an image and name.</li>
        <li>Style as a simple grid.</li>
      </Task>
    </>
  );
};

export default CategoryPage;
