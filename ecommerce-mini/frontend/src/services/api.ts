import type { Product } from "../types/product";

export const API_URL = "http://localhost:8080/api";

export async function fetchProducts() {
    const res = await fetch(`${API_URL}/products`);
   return res.json() as Promise<Product[]>; // cast to Product[]
}

export async function fetchProduct(id: string) {
    const res = await fetch(`${API_URL}/products/${id}`);
    return res.json() as Promise<Product[]>; // cast to Product[]
}