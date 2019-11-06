import React from 'react'

const Stock = (props) => (
  <div  >
    <div onClick={() => props.renderStocks(props.stockInfo.id,props.container)} className="card">
      <div className="card-body">
        <h5 className="card-title">{
            props.stockInfo.name
          }</h5>
        <p className="card-text">{
            props.stockInfo.ticker + " " + props.stockInfo.price
          }</p>
      </div>
    </div>


  </div>
);

export default Stock
