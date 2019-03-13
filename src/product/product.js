import React, { Component } from 'react';
import './product.css';

class Product extends Component{
    //when ever we want to render html on screen we use render function
    render(){
        return(
            <div className="card">
                <img className="card-img-top" alt="Product"></img>
                <div className="card-block">
                    <h4 className="card-title"></h4>
                    <p className="card-text">Prixe: $</p>
                    <a href="#" className="btn btn-primary">Add to Wishlist</a>
                </div>
            </div>
        )
    }
} 

export default Product;
