import express from "express";
import cors from "cors";
import productRoutes from "./routes/products.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Backend is running on Port: ${PORT}`)
})