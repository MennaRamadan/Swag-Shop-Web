export const NOTIF_WISHLIST_CHANGED = "notif_wishlist_changed";


var observers = {};
let instance = null;
class NotificationService {
    constructor(){
        if(!instance){
            instance =this;
        }
        return instance;
    }

    postNoification= (notifiName, data) =>{
        let obs = observers[notifiName];
        for(var x= 0; x< obs.length; x++){
            var obj = obs[x];
            obj.callBack(data);
        }
    }

    removeObserver = (observer, notifiName) => {
        var obs = observers[notifiName];
        if(obs){
            for (var x= 0 ; x< obs.length; x++){
                if(observer === obs[x].observer){
                    obs.splice(x,1);
                    observers[notifiName] = obs;
                    break;
                }
            }
        }
    }

    addObserver = (notifiName, observer, callBack) =>{
        let obs = observers[notifiName];

        if(!obs){
            observers[notifiName] = [];
        }

        let obj = {observer: observer, callBack: callBack};
        observers[notifiName].push(obj);
    }
}


export default NotificationService;