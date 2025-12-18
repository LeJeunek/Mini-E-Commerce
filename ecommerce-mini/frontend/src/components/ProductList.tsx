import { useState } from "react";
import { useProducts } from "../hooks/useProducts";
import { ProductRow } from "./ProductRow";
import Filter from "./Filter";

export default function ProductList() {
  const { products, loading, error } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  // Category data with images and titles
  const categories = [
    {
      id: "piston",
      title: "Piston Seals",
      image: "/assets/psm-pistonseal.jpg",
      description: "High-performance piston seals for hydraulic cylinders",
    },
    {
      id: "rod",
      title: "Rod Seals",
      image: "/assets/rtu-rodseal.jpg",
      description: "Reliable rod seals for leak prevention",
    },
    {
      id: "wiper",
      title: "Wiper Seals",
      image: "/assets/an-wiper.jpg",
      description: "Dust and contaminant wiper seals",
    },
  ];

  const filteredProducts = selectedCategory
    ? products.filter((p) => {
        if (selectedCategory === "piston")
          return p.name.includes("Piston Seal");
        if (selectedCategory === "rod") return p.name.includes("Rod Seal");
        if (selectedCategory === "wiper") return p.name.includes("Wiper");
        return false;
      })
    : [];

  return (
    <div style={{ minHeight: "100vh" }} className="product-list-container">
      {selectedCategory ? (
        /* Product view - hide categories when showing products */
        <div style={{ padding: "24px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "24px",
            }}
          >
            <div className="return-block">
              <button
                onClick={() => setSelectedCategory(null)}
                style={{
                  padding: "8px 16px",
                  backgroundColor: "#6b7280",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                ← Back to Categories
              </button>
              <h2
                style={{ fontSize: "24px", fontWeight: "bold", margin: 0 }}
                className="category-title"
              >
                {categories.find((c) => c.id === selectedCategory)?.title}
              </h2>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2px",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            {filteredProducts.map((product) => (
              <ProductRow key={product.id} product={product} />
            ))}
          </div>
        </div>
      ) : (
        /* Category selection view */
        <div
          style={{
            backgroundColor: "#f9fafb",
            padding: "24px",
            borderBottom: "1px solid #e5e7eb",
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "24px",
              textAlign: "center",
            }}
          >
            Select Category
          </h2>
          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {categories.map((category) => (
              <div
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                style={{
                  flex: "0 0 300px",
                  padding: "16px",
                  border:
                    selectedCategory === category.id
                      ? "2px solid #3b82f6"
                      : "2px solid #d1d5db",
                  borderRadius: "8px",
                  cursor: "pointer",
                  backgroundColor:
                    selectedCategory === category.id ? "#eff6ff" : "white",
                  transition: "all 0.2s",
                }}
              >
                <img
                  src={category.image}
                  alt={category.title}
                  style={{
                    width: "100%",
                    height: "120px",
                    objectFit: "cover",
                    borderRadius: "4px",
                    marginBottom: "12px",
                  }}
                />
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    marginBottom: "8px",
                    textAlign: "center",
                  }}
                >
                  {category.title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#6b7280",
                    textAlign: "center",
                  }}
                >
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
