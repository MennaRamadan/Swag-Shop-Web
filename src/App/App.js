import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HttpService from '../services/http-service';
import Product from '../product/product';


const http = new HttpService();

class App extends Component {

  //this constructor is loaded while loading component
  constructor(props){
    super(props);
    //must bind the class to the function
    this.loadData = this.loadData.bind(this);
    this.loadData();
  }

  loadData = () => {
    //http.getProducts that for calling servce
    //.then >> after promise return value 
    //if success call products function if not call error function

    http.getProducts().then(products =>{
      console.log(products);
    }, err => {

    });
  }

  render() {
    return (
      <div className="App">
        <header className="container App-header">
          {/* <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </header>
        <div className="App-main"> 
            <Product />
        </div>
      </div>
    );
  }
}

export default App;
