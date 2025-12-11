import { useEffect, useState } from "react";
import type { Product } from "../types/product";
import { fetchProducts } from "../services/api";

export const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetchProducts().then(setProducts);
    }, []);

    return products;
}