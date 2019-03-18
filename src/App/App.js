import React, { Component } from 'react';
import './App.css';
//services
import HttpService from '../services/http-service';
//Components
import Product from '../product/product';
import WishList from '../wishList/wishList';


const http = new HttpService();

class App extends Component {

  //this constructor is loaded while loading component
  constructor(props){
    super(props);
    //state is hold different properties
    this.state = {products: []};

    //must bind the class to the function
    this.loadData = this.loadData.bind(this);
    this.productList = this.productList.bind(this);
    this.loadData();
  }

  loadData = () => {
    //http.getProducts that for calling servce
    //.then >> after promise return value 
    //if success call products function if not call error function
    //setstate used to reload data or while refresh 
    http.getProducts().then(data =>{
      // var self= this; 
      this.setState({products: data})
      console.log(data);
    }, err => {

    });
  }

  productList = ()=>{
    const list = this.state.products.map((product) =>
      <div className="col-sm-4" key={product._id}>
        {/* <Product title={product.title} price={product.price} imgUrl={product.imgUrl}></Product> */}
        <Product product={product}></Product>
      </div>
    )
    return (list);
  }

  render() {
    return (
      <div className="App">
        <header className="container App-header">
        </header>
        <div className="container-fluid App-main"> 
        <div className="row">
            {/* <Product className="col-sm-4" price="4.23" title="cool Toy Gun" imgUrl="https://www.ebay.co.uk/itm/SMALL-GREEN-KIDS-CHILDRENS-WATER-PISTOL-GUN-11CM-x-8CM-x-2CM-GREEN-NEW-/201993446720"/> */}
            <div className="col-sm-8">
              <div className="row">
                {this.productList()}
              </div>
            </div>
            <div className="col-sm-4">
              <WishList/>
            </div>
        </div> 
        {/* <div className="row">
          <div className="col-sm-4">
            <WishList/>
          </div>
        </div> */}
        </div>
      </div>
    );
  }
}

export default App;
