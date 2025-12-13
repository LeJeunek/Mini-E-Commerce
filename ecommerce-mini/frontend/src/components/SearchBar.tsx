import Form from "react-bootstrap/Form";

const SearchBar = () => {
  return (
    <Form.Control
      type="search"
      placeholder="Search products..."
      className="w-100 me-2"
    />
  );
};

export default SearchBar;
