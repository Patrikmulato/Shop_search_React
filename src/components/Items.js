import React from 'react';
import './Card.css';


const Items = ({ name, skr, brand, description, price, picture }) => {
  return (
        <div className="card">
          <img
            alt='wheel'
            src={require(`./pictures/${picture}`)}
            className="rounded"
            height="200px"
            width="200px"
          />
          <div>
            <h2>{name}</h2>
            <h4>{brand}</h4>
            <p>{description}</p>
            <p>{price}</p>
          </div>
        </div>
  );
}



export default Items;

/*
<div className="text-center">
  <div>
    <img
      alt='wheel'
      src={require(`./pictures/${picture}`)}
      className="rounded"
      height="200px"
      width="200px"
    />
    <div>
      <h2>{name}</h2>
      <h4>{brand}</h4>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  </div>
</div>
*/
