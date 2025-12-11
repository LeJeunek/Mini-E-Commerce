import SearchBar from "./SearchBar";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="title-block">
          <img src={logo} alt="logo" />
          <h1>HydroSeal</h1> <SearchBar />
        </div>

        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Products</li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
