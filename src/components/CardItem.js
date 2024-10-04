import React from 'react';

function CardItem({ item, onBuy }) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className=" col-md-10">
          <div className="card position-relative">
            <img src={item.image} className="card-img-top" alt="Card image" />
            <div className="card-body">
              <h5 className="card-title">Margherita Pizza</h5>
              <p className="card-text">
                <p className="card-text">${item.price}</p>
              </p>
              <div onClick={() => onBuy(item)} href="#" className="btn btn-primary ">
                Buy
              </div>
            </div>
            <div class="d-inline ps-2 pe-2 bg-warning position-absolute rounded  ">SALE</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
