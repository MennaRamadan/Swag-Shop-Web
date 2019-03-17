import React, { Component } from 'react';
import './wishList.css';
import ProductCondensed from '../productCondensed/productCondensed'
import DataService from '../services/data service';
import NotificationService , {NOTIF_WISHLIST_CHANGED} from '../services/notification service';

let ns = new NotificationService();
class Wishlist extends Component{

    constructor(props){
        super(props);
        this.state = {wishlist: [
            // {
            //     title: "Bologna Killer",
            //     price: 23.99,
            //     id: "sddgbh"
            // },
            // {
            //     title: "Bologna Killer 2",
            //     price: 23.99,
            //     id: "sddgbh11"
            // },
            // {
            //     title: "Bologna Killer 3",
            //     price: 23.99,
            //     id: "sddgbh22"
            // }
        ]};

        //bind functions
        this.createWishList = this.createWishList.bind(this);
        this.onWishListChanged = this.onWishListChanged.bind(this);
    }

    //these two functions is aleady bild in react
    componentDidMount(){
        ns.addObserver(NOTIF_WISHLIST_CHANGED, this, this.onWishListChanged);
    }

    componentWillUnmount(){
        ns.removeObserver(this, NOTIF_WISHLIST_CHANGED);
    }

    createWishList = () => {
        const list = this.state.wishlist.map((product) => 
            <ProductCondensed product={product} key={product._id} />
        )
        return (list);
    }

    onWishListChanged(newWishList){
         this.setState({wishlist: newWishList});
    }

    //when ever we want to render html on screen we use render function
    render(){
        return(
            <div className="card">
                <div className="card-block">
                    <h4 className="card-title">Wish List</h4>
                    <ul className="list-group">
                        {this.createWishList()}
                    </ul>
                </div>
            </div>
        )
    }
} 

export default Wishlist;
