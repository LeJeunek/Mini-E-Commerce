import type { Product } from "../components/types/product";


export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch("http://localhost:8080/api/products");

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}
export async function fetchProduct(id: string): Promise<Product> {
  const res = await fetch(`http://localhost:8080/api/products/${id}`);
    if (!res.ok) {
    throw new Error("Failed to fetch product");
    }
    return res.json();
}

export async function fetchProductsByCategory(category: string): Promise<Product[]> {
  const res = await fetch(`http://localhost:8080/api/products/category/${category}`);
    if (!res.ok) {
    throw new Error("Failed to fetch products by category");
    }
    return res.json();
}

