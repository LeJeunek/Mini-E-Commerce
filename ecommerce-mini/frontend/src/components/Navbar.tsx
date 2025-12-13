import SearchBar from "./SearchBar";
import logo from "../assets/logo.png";
import { Button, Container } from "react-bootstrap";

const Navbar = () => {
  return (
    <Container fluid className="border-bottom py-2 px-4 ms-auto custom-navbar">
      {/* Top bar */}
      <div className="d-flex align-items-center gap-3 flex-nowrap">
        {/* Logo + brand */}
        <div className="d-flex align-items-center flex-shrink-0">
          <img src={logo} alt="logo" height={50} />
        </div>

        {/* Search */}
        <div className="mx-5 search-bar my-4 flex-grow-1">
          <SearchBar />
        </div>

        {/* Auth buttons */}
        <div className="d-flex gap-1  ms-4">
          <Button variant="outline-primary" size="sm">
            Login
          </Button>
          <Button variant="primary" size="sm">
            Sign Up
          </Button>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="d-flex gap-4 mt-2 mb-2 ps-5">
        <a href="#" className="text-decoration-none">
          Home
        </a>
        <a href="#" className="text-decoration-none">
          About
        </a>
        <a href="#" className="text-decoration-none">
          Contact
        </a>
        <a href="#" className="text-decoration-none">
          Products
        </a>
      </div>
    </Container>
  );
};

export default Navbar;
