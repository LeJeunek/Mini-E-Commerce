const PurchaseBlock = () => {
  return (
    <div className="purchase-block fs-2 d-flex flex-column align-items-center ms-auto me-5 text-center w-25">
      <input
        type="number"
        defaultValue={1}
        min="1"
        className="quantity-input fs-1 mb-5"
      />
      <button className="purchase-button">Add to Cart</button>
    </div>
  );
};
export default PurchaseBlock;
