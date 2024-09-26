import logo from './logo.svg';
import './App.css';
import pizza1 from "./img/pizza1.jpg"
import pizza2 from "./img/pizza2.jpg"
import pizza3 from "./img/pizza3.jpg"
import pizza4 from "./img/pizza4.jpg"
import pizza5 from "./img/pizza5.jpg"
import menu1 from "./img/menu1.jpg"
import menu2 from "./img/menu2.jpg"
import menu3 from "./img/menu3.jpg"
import menu4 from "./img/menu4.jpg"

function App() {
  return (
    <div >
    <nav className="navbar navbar-expand-lg bg-body-rgb(72,72,72) container ">
    <div className="container-fluid d-flex justify-content-around">
      <a className="navbar-brand text-white" href="#">Pizza House</a>
      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled text-white" aria-disabled="true">Contact</a>
          </li>
        </ul>
      </div>
      <form className="d-flex" role="search"> 
          <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-danger" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg></button>
          
        </form>
    </div>
  </nav>

  <div id="carouselExampleIndicators" className="carousel slide position-relative">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={pizza1} class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={pizza2} class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={pizza3} class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={pizza4} class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={pizza5} class="d-block w-100" alt="..."/>
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
  <div className='position-absolute top-50 start-50 translate-middle text-center'>
  <h1 className='text-light'>Neapolitan Pizza</h1>
  <h5 className='text-light'>If you are looking for a traditional Italian pizza, the Neapolitan is the best option!</h5>
  </div>
</div>


<div className="container mt-5">
    <div className="row">
        <div className="col-md-3">
            <div className="card position-relative">
                <img src={menu1} className="card-img-top" alt="Card image"/>
                <div className="card-body">
                    <h5 className="card-title">Margherita Pizza</h5>
                    <p className="card-text"><span className=" line-through">$40.00</span> $24.00</p>
                    <button href="#" className="btn btn-primary">Buy</button>
                </div>  
                <div class="d-inline ps-2 pe-2 bg-warning position-absolute rounded  ">SALE</div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="card">
                <img src={menu2} className="card-img-top" alt="Card image"/>
                <div className="card-body">
                    <h5 className="card-title">Mushroom Pizza</h5>
                    <p className="card-text">$25</p>
                    <button href="#" className="btn btn-primary">Buy</button>
                </div>
                
            </div>
        </div>
        <div className="col-md-3">
            <div className="card">
                <img src={menu3} className="card-img-top" alt="Card image"/>
                <div className="card-body">
                    <h5 className="card-title">Hawaiian Pizza</h5>
                    <p className="card-text">$30</p>
                    <button href="#" className="btn btn-primary">Buy</button>
                </div>
                <div class="d-inline ps-2 pe-2 bg-warning position-absolute rounded">NEW</div>
            </div>
        </div>
        <div className="col-md-3">  
            <div className="card">
                <img src={menu4} className="card-img-top" alt="Card image"/>
                <div className="card-body">
                    <h5 className="card-title">Pesto Pizza</h5>
                    <p className="card-text"><span className=" line-through">$50.00</span> $30.00</p>
                    <button href="#" className="btn btn-primary">Buy</button>
                </div>
                <div class="d-inline ps-2 pe-2 bg-warning position-absolute rounded ">SALE</div>
            </div>
        </div>
    </div>
</div>
 
<div className='container mt-3'>
  <div className='row'>
    <h1 className='text-center text-white'>Book your table</h1>
    <div className='d-flex justify-content-around align-content-lg-center'>
    <div class="input-group p-1">
  <input type="text" class="form-control mb-3" placeholder="Username" aria-label="Username"/>
  <input type="text" class="form-control mb-3" placeholder="Email*" aria-label="Server"/>
  <select class="form-select form-control mb-3" id="inputGroupSelect01">
    <option selected>Select a Service</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>
    </div>
    <div class="mb-1">
  <label for="exampleFormControlTextarea1" class="form-label"></label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  <button type="button" class="btn btn-warning mt-2">Warning</button>
</div>
  </div>
</div>
 

 

  </div>
  );
}

export default App;

