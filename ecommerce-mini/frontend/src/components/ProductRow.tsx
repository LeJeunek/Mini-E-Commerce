import type { Product } from "./types/product";

interface Props {
  product: Product;
}

export function ProductRow({ product }: Props) {
  return (
    <div className="product-row">
      <img
        src={product.image}
        alt={product.name}
        className="product-row-image"
      />

      <div className="product-row-content">
        <h3>{product.name}</h3>
        <p className="product-row-description">{product.description}</p>
        <p className="product-row-price">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}
