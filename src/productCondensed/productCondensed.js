import React, { Component } from 'react';
import './productCondensed.css';
import DataServer from '../services/data service';

var ds = new DataServer();
class ProductCondensed extends Component{

    constructor(props){
        super(props);

        this.removeProduct = this.removeProduct.bind(this);
    }

    removeProduct = () =>{
        ds.removeWishListItem(this.props.product);
    }
    //when ever we want to render html on screen we use render function
    render(){
        return(
           <li className="list-group-item pc-condensed">
                <a className="btn btn-outline-danger" onClick={() => this.removeProduct()}> X </a>
                <p>{this.props.product.title} | <b>${this.props.product.price}</b></p>
           </li>
        )
    }
} 

export default ProductCondensed;
