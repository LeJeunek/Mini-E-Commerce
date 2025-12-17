import { Router } from "express";
import products from "../data/products.json" with { type: "json" };
import type { Product } from "../types/product.js";

const router = Router();

router.get("/", (req, res) => {
    res.json(products);
});

router.get("/:id", (req, res) => {
    const product = (products as Product[]).find(
        (p) => p.id === req.params.id
    );
    if (!product) {
        return res.status(404).json({ message: "Product not found" });

    }
    res.json(product);
});

router.get("/category/:category", (req, res) => {
    const category = req.params.category;
    const filteredProducts = (products as Product[]).filter(
        (p) => p.category === category
    );
    res.json(filteredProducts);
    if(!filteredProducts.length){
        return res.status(404).json({ message: "No products found in this category" });
    }
});



export default router