import React from 'react';
import CardItem from './CardItem';

function ProductList({ label, products, handleBuy }) {
  return (
    <div className="container mt-5">
      <h1 className="menu-title text-center">{label}</h1>
      <div className="card-group">
        {products &&
          products.map((item, index) => {
            return <CardItem item={item} handleBuy={handleBuy} key={index} />;
          })}
      </div>
    </div>
  );
}

export default ProductList;
{
  /* <div className="container mt-5">
      <div className="row">
        {items.map(item => (
          <div key={item.id} className="col-md-4">
            <CardItem item={item} onBuy={onBuy} />
          </div>
        ))}
      </div>
    </div> */
}
