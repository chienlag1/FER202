import pizza1 from '../img/pizza1.jpg';
import pizza2 from '../img/pizza2.jpg';
import pizza3 from '../img/pizza3.jpg';
import pizza4 from '../img/pizza4.jpg';
import pizza5 from '../img/pizza5.jpg';
function PageHome() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide position-relative">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={pizza1} class="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={pizza2} class="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={pizza3} class="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={pizza4} class="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={pizza5} class="d-block w-100" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      <div className="position-absolute top-50 start-50 translate-middle text-center">
        <h1 className="text-light">Neapolitan Pizza</h1>
        <h5 className="text-light">If you are looking for a traditional Italian pizza, the Neapolitan is the best option!</h5>
      </div>
    </div>
  );
}
export default PageHome;
