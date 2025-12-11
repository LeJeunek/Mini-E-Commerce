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

export default router