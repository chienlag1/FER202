function CardItem({ item, handleBuy }) {
  return (
    <div className="card">
      <div className="card position-relative">
        <img src={item.image} className="card-img-top" alt="Card image" />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">
            <p className="card-text">${item.price}</p>
          </p>
          <div onClick={() => handleBuy(item)} href="#" className="btn btn-primary ">
            Buy
          </div>
        </div>
        <div className="d-inline ps-2 pe-2 bg-warning position-absolute rounded  ">SALE</div>
      </div>
    </div>
  );
}

export default CardItem;
