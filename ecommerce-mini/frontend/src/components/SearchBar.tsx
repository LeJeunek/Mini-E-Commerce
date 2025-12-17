import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const SearchBar = () => {
  return (
    <>
      <Form.Control
        type="search"
        placeholder="Search products..."
        className="w-100  mt-4 search-bar"
      />
      <Button className="ms-2 mt-4 search-button">Search</Button>
    </>
  );
};

export default SearchBar;
