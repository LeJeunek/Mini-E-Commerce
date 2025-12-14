import { Container, Button } from "react-bootstrap";

const Hero = () => {
  return (
    <section className="hero-section border-bottom">
      <Container className="py-5">
        <div className="col-lg-8 hero-block">
          <h1 className="fw-bold mb-3">
            Precision Sealing Solutions for Demanding Environments
          </h1>

          <p className="text-muted fs-5 mb-4">
            Hydraulic seals, custom-machined components, and industrial supply
            solutions built for performance, reliability, and long service life.
          </p>

          <div className="d-flex gap-3">
            <Button className="btn-primary-custom">Browse Products</Button>
            <Button variant="outline-secondary">Request a Quote</Button>
          </div>
        </div>
      </Container>

      {/* Category strip */}
      <div className="hero-categories border-top">
        <Container>
          <div className="d-flex gap-4 py-3 flex-wrap">
            <a href="#">Seals</a>
            <a href="#">Bearings</a>
            <a href="#">Custom Machining</a>
            <a href="#">OEM Services</a>
            <a href="#">Accessories</a>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
