//singleton one shared data in memory
// class Car {

// }

// var car1 = car();
// var car2 = car();

//we do this as we need to change in wishList of make it listen when product add to it
import NotificationService , {NOTIF_WISHLIST_CHANGED} from '../services/notification service';

let ns=  new NotificationService();
let instance = null;
var wishList =[];
class DataService {
    constructor(){
        if(!instance){
            instance =this;
        }
        return instance;
    }

    itemOnWishList = item => {
        for (var x=0 ; x> wishList.length; x++){
            if(wishList[x]._id === item._id){
                return true;
            }
            return false;
        }   
    }
    addWishListItem = (item) =>{
        wishList.push(item);
        ns.postNoification(NOTIF_WISHLIST_CHANGED, wishList);
    }

    //same above
    // addWishListItem = item =>{
    //     wishList.push(item);
    // }

    removeWishListItem = (item) =>{
        for (var x= 0; x< wishList.length ; x++){
            if(wishList[x]._id === item._id){
                wishList.splice(x,1);
                ns.postNoification(NOTIF_WISHLIST_CHANGED, wishList);
                break;
            }
        }
    }
}

export default DataService;


