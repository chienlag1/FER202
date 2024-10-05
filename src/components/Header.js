import Badge from 'react-bootstrap/Badge';

function Header({ cartCount, onCartClick }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-rgb(72,72,72) container ">
        <div className="container-fluid d-flex justify-content-around">
          <a className="navbar-brand text-white" href="#">
            Pizza House
          </a>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled text-white" aria-disabled="true">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <form className="d-flex" role="search">
            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-danger" type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </button>
          </form>
          <button onClick={onCartClick} className="btn btn-primary">
            Cart Item <Badge bg="secondary">{cartCount}</Badge>
          </button>
        </div>
      </nav>
    </div>
  );
}
export default Header;
