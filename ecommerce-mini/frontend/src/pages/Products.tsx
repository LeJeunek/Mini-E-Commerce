import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";

//Want to render the list dependent on category

export default function Products() {
  return (
    <div className="mb-4">
      <Navbar />
      <ProductList />
    </div>
  );
}
