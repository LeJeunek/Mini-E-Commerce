import { useProducts } from "../hooks/useProducts";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const products = useProducts();

  return (
    <div className="grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
