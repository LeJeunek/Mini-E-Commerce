import Carousel from "react-bootstrap/Carousel";

function Reviews() {
  return (
    <div className="reviews-section mt-5 mb-5">
      <Carousel indicators={false}>
        <Carousel.Item>
          <div className="review-slide bg-light p-4 rounded-3">
            <p className="review-text">
              “Nulla vitae elit libero, a pharetra augue mollis interdum.”
            </p>
            <h5 className="review-author">— Jane D.</h5>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="review-slide bg-light p-4 rounded-3">
            <p className="review-text">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit.”
            </p>
            <h5 className="review-author">— Mark T.</h5>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="review-slide bg-light p-4 rounded-3">
            <p className="review-text">
              “Praesent commodo cursus magna, vel scelerisque nisl consectetur.”
            </p>
            <h5 className="review-author">— Alex R.</h5>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Reviews;
