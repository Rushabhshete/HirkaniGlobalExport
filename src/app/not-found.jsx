import { products } from "@/data/products";
import NotFoundClient from "@/components/NotFoundClient";

export default function NotFound() {
  // Suggest a few featured products to keep the user engaged
  const suggestedProducts = products.slice(0, 3);

  return (
    <NotFoundClient suggestedProducts={suggestedProducts} />
  );
}
