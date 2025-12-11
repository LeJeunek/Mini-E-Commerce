import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";

//temporary match to Products page, need to build banner, Hero, links to particular parts

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <h1 style={{ marginBottom: "1rem" }}>Products</h1>
      <ProductList />
    </div>
  );
};

export default Home;
