import type { Product } from "../types/product";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="card" style={{display: "flex", flexDirection: "column"}}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
    </div>
  );
}
