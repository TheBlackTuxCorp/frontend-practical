import { useRouter } from "next/router";
import { Product } from "../../../types";

const ProductPage = () => {
  const { query } = useRouter();

  // Task: Fetch the product data from the API
  // https://fakestoreapi.com/products/{productId}

  return <div>Product: {query.productId}</div>;
};

export default ProductPage;
