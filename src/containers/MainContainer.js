import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'


class MainContainer extends Component {

  state = {
    stocks: [],
    pStock: [],
    searchKey: "",
    sortPrice: false,
    sortAlph: false
  }

  componentDidMount= () => {
    fetch("http://localhost:3000/stocks")
    .then(resp => resp.json())
    .then(data => this.setState({stocks : data}))
  }

  //Used container to identify diff component
  renderClick = (id,container) => {
    const stock = this.state.stocks.find(stock=> stock.id === id)
    if(container === "stock"){
      this.setState({pStock: [...this.state.pStock,stock]})
    } else {
      const remainingProfolioStock = this.state.pStock.filter(stock => stock.id !== id)
      this.setState({pStock: remainingProfolioStock})
    }
  }

  handleSortPrice = () => {
    this.setState({sortPrice: !this.state.sortPrice})
  }

  handleSortAlph = () => {
    this.setState({sortAlph: !this.state.sortAlph})
  }

  handleSort = () => {
    if(this.state.searchKey.length > 0)
      return [...this.state.stocks].filter(stock => stock.type === this.state.searchKey);
    
    if(this.state.sortPrice){
      return [...this.state.stocks].sort((stock1,stock2)=>{
        return stock1.price - stock2.price
      })
    }

    if(this.state.sortAlph){ 
      return [...this.state.stocks].sort((stock1,stock2)=>{
        if(stock1.name > stock2.name){
          return 1
        } else if (stock1.name < stock2.name){
          return -1
        } else {
          return 0
        }
      }) 
    }else {
      return this.state.stocks
    }
  }

  handleSearch = (stockType) => {
    this.setState({searchKey: stockType})
  }

  render() {
    console.log(this.state.stocks)
    return (
      <div>
        <SearchBar handleSearch = {this.handleSearch} handleSortPrice = {this.handleSortPrice} handleSortAlph={this.handleSortAlph}/>
          <div className="row">
            <div className="col-8">
              <StockContainer searchKey={this.state.searchKey} stocks={this.handleSort()} renderStocks={this.renderClick} />
            </div>
            <div className="col-4">
              <PortfolioContainer stocks = {this.state.pStock} renderStocks={this.renderClick} />
            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
