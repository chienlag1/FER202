import React from 'react';
import CardItem from './CardItem';

function ProductList({ items, onBuy }) {
  return (
    <div className="container mt-5">
      <div className="row">
        {items.map(item => (
          <div key={item.id} className="col-md-4">
            <CardItem item={item} onBuy={onBuy} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
