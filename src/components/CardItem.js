// import menu1 from '../img/menu1.jpg';
// import menu2 from '../img/menu2.jpg';
// import menu3 from '../img/menu3.jpg';
// import menu4 from '../img/menu4.jpg';
// function CardItem(item, onBuy) {
//   return (
//     <div className="container mt-5">
//       <div className="row">

//         <div className="col-md-3">
//           <div className="card position-relative">
//             <img src={menu1} className="card-img-top" alt="Card image" />
//             <div className="card-body">
//               <h5  className="card-title">Margherita Pizza</h5>
//               <p className="card-text">
//                 <span className=" line-through">$40.00</span> $24.00
//               </p>
//               <div onClick={() => onBuy(item)} href="#" className="btn btn-primary ">
//                 Buy
//               </div>
//             </div>
//             <div class="d-inline ps-2 pe-2 bg-warning position-absolute rounded  ">SALE</div>
//           </div>
//         </div>

//         <div className="col-md-3">
//           <div className="card">
//             <img src={menu2} className="card-img-top" alt="Card image" />
//             <div className="card-body">
//               <h5 className="card-title">Mushroom Pizza</h5>
//               <p className="card-text">$25</p>
//               <button href="#" className="btn btn-primary">
//                 Buy
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="col-md-3">
//           <div className="card">
//             <img src={menu3} className="card-img-top" alt="Card image" />
//             <div className="card-body">
//               <h5 className="card-title">Hawaiian Pizza</h5>
//               <p className="card-text">$30</p>
//               <button href="#" className="btn btn-primary">
//                 Buy
//               </button>
//             </div>
//             <div class="d-inline ps-2 pe-2 bg-warning position-absolute rounded">NEW</div>
//           </div>
//         </div>

//         <div className="col-md-3">
//           <div className="card">
//             <img src={menu4} className="card-img-top" alt="Card image" />
//             <div className="card-body">
//               <h5 className="card-title">Pesto Pizza</h5>
//               <p className="card-text">
//                 <span className=" line-through">$50.00</span> $30.00
//               </p>
//               <button href="#" className="btn btn-primary">
//                 Buy
//               </button>
//             </div>
//             <div class="d-inline ps-2 pe-2 bg-warning position-absolute rounded ">SALE</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default CardItem;

import React from 'react';

function CardItem({ item, onBuy }) {
  return (
    <div className="card">
      <img src={item.image} alt={item.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">${item.price}</p>
        <button onClick={() => onBuy(item)} className="btn btn-success">
          Buy
        </button>
      </div>
    </div>
  );
}

export default CardItem;
