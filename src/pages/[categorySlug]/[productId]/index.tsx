import { useRouter } from "next/router";
import { Product } from "../../../types";
import Task from "../../../components/Task";

const ProductPage = () => {
  const { query } = useRouter();

  // Task: Fetch the product data from the API
  // https://fakestoreapi.com/products/{productId}
  const getProduct = (): Product => ({});

  const product = getProduct();

  return (
    <div>
      <h2 className="text-2xl font-bold text-red-600">{query.productId}</h2>

      <Task>
        <li>Fetch the individual product data.</li>
        <li>
          Render vital information about the product, including the image, name,
          price, rating
        </li>
        <li>Style as a simple grid.</li>
      </Task>
    </div>
  );
};

export default ProductPage;
