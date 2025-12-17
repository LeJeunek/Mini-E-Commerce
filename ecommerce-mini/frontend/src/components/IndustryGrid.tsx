import tractor from "../assets/agriculture2.jpg";
import construction from "../assets/construction.jpg";
import manufacturing from "../assets/manufacturing.jpg";

const IndustryGrid = () => {
  return (
    <div className="industry-grid py-5 px-3">
      <h2 className="fw-bold mb-5 text-center">Industries We Serve</h2>
      <div className="d-flex flex-wrap justify-content-center gap-4">
        <div className="card p-3 text-center">
          <h5 className="fw-semibold">Agriculture</h5>
          <img src={tractor} alt="" />
        </div>
        <div className="card p-3 text-center">
          <h5 className="fw-semibold">Construction</h5>
          <img src={construction} alt="" />
        </div>
        <div className="card p-3 text-center">
          <h5 className="fw-semibold">Manufacturing</h5>
          <img src={manufacturing} alt="" />
        </div>
      </div>
    </div>
  );
};
export default IndustryGrid;
