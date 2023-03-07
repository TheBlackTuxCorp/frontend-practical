import { useRouter } from "next/router";

const CategoryPage = () => {
  const { query } = useRouter();

  // Task: Fetch the products in the given category from the API
  // https://fakestoreapi.com/products/category/jewelery

  return (
    <div>
      <h1>Category: {query.categorySlug}</h1>

      <div>
        Task: Fetch the products in the given category: {query.categorySlug}
      </div>
    </div>
  );
};

export default CategoryPage;
