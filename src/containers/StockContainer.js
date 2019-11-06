import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  state = {
    stocks: this.props.stocks
  }

  filterByType = (stockType) => {
    if(stockType)
      return [...this.props.stocks].filter(stock => stock.type === stockType);
    else 
      return this.props.stocks;
    
  }

  renderStocks = () => {
  // return this.filterByType(this.props.searchKey).map(stock => <Stock renderStocks={this.props.renderStocks} stockInfo={stock} key={require('uuid/v4')()} container={"stock"}/>)
  return this.state.stocks.map(stock => <Stock renderStocks={this.props.renderStocks} stockInfo={stock} key={require('uuid/v4')()} container={"stock"}/>)
  
  }

  render() {
    console.log("Stock Container State: ", this.props.stocks)
    return (
      <div>
        <h2>Stocks</h2>
        { this.renderStocks() }
      </div>
    );
  }

}

export default StockContainer;
