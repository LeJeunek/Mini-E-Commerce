import SearchBar from "./SearchBar";
import logo from "../assets/logo.png";
import { Button, Container } from "react-bootstrap";

const Navbar = () => {
  return (
    <Container
      fluid
      className="border-bottom py-2 w-100 custom-navbar position-fixed"
    >
      <Container fluid="md" className="p-0 w-100">
        {/* Top row */}
        <div className="d-flex align-items-center justify-content-center gap-2 flex-grow-1 w-100 px-3 py-1 mb-2 rounded-3">
          <div className="d-flex justify-content-center position-relative mx-auto flex-grow-1">
            <img src={logo} alt="HydroSeal" height={60} /> <SearchBar />
          </div>

          <div className="d-flex gap-2 flex-shrink-0">
            <Button variant="outline-primary" size="sm">
              Login
            </Button>
            <Button variant="primary" size="sm">
              Sign Up
            </Button>
          </div>
        </div>

        {/* Bottom nav */}
        <div className="d-flex gap-4 justify-content-center my-3 me-5 px-2 mb-1 nav-links fw-semibold">
          <a href="/" className="text-decoration-none">
            Home
          </a>
          <a href="#" className="text-decoration-none">
            About
          </a>
          <a href="#" className="text-decoration-none">
            Contact
          </a>
          <a href="/products" className="text-decoration-none">
            Products
          </a>
        </div>
      </Container>
    </Container>
  );
};

export default Navbar;
