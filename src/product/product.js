import React, { Component } from 'react';
import './product.css';
import DataSerevice from '../services/data service';
import NotificationServer , {NOTIF_WISHLIST_CHANGED}from '../services/notification service';

let ds= new DataSerevice();
let ns = new NotificationServer();

class Product extends Component{

    constructor(props){
        super(props);
        this.state = {onWishList: ds.itemOnWishList()};
        //Bind Function
        this.onButtonClick = this.onButtonClick.bind(this);
        this.onWishListChanged = this.onWishListChanged.bind(this);
    }

    componentDidMount(){
        ns.addObserver(NOTIF_WISHLIST_CHANGED, this, this.onWishListChanged);
    }

    componentWillUnmount(){
        ns.removeObserver(this, NOTIF_WISHLIST_CHANGED);
    }

    onWishListChanged(newWishList){
        this.setState({onWishList: ds.itemOnWishList(this.props.product)});
    }

    onButtonClick= () => {
        if(this.state.onWishList){
            ds.removeWishListItem(this.props.Product)
        }
        else{
            ds.addWishListItem(this.props.product);
        }
    }

    //when ever we want to render html on screen we use render function
    render(){

        var btnClass ;
        if(this.state.onWishList)
            {
                btnClass = "btn btn-danger";
            }
        else{
            btnClass = "btn btn-primary";
        }    

        return(
            <div className="card product">
                <img className="card-img-top" src={this.props.product.imgUrl} alt="Product"></img>
                <div className="card-block">
                    <h4 className="card-title">{this.props.product.title}</h4>
                    <p className="card-text">Prixe: ${this.props.product.price}</p>
                    <a onClick={() => this.onButtonClick()} className={btnClass}>{this.state.onWishList ? "Remove from WishList": "Add to Cart"}</a>
                </div>
            </div>
        )
    }
} 

export default Product;
