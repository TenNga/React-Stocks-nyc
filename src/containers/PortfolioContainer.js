import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  renderStock = () => {
    return this.props.stocks.map(stock => <Stock stockInfo={stock} key={require('uuid/v4')()} renderStocks={this.props.renderStocks} container={"portfolio"}/>)
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.renderStock()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
