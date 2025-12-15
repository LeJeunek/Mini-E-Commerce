import tractor from "../assets/agriculture.svg";
import construction from "../assets/construction.svg";
import factory from "../assets/factory.svg";

const IndustryGrid = () => {
  return (
    <div className="industry-grid py-5">
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
          <img src={factory} alt="" />
        </div>
      </div>
    </div>
  );
};
export default IndustryGrid;
