import React from 'react';
import { products } from './products.js';
import Items from './Items';


const Card = () => {
  return (
    <div className="container-fluid text-center">
      {
        products.map((user , i ) => {
          return (
            <Items
              key={i}
              name={products[i].name}
              brand={products[i].brand}
              desc={products[i].description}
              price={products[i].price}
              picture={products[i].picture}
            />
          );
        })
      }
    </div>
  );
}



export default Card;
