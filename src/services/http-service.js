//will communicte with api
import 'whatwg-fetch';
import { resolve, reject } from 'q';

class HttpService{

    // var getProducts = function(){}
    // getProducts = () =>{
    //     fetch('http://localhost:3004/product')
    //     .then(res => {
    //         console.log(res.json());
    //     })
    // }

    //using promis this mean it will return the result (rejection or data) once find it
    getProducts = () =>{
        //1
        var promise = new Promise((resolve, reject) => {
            //2
            fetch('http://localhost:3004/product')
            .then(response => {
                //4
                resolve(response.json());
            })
        });
        //3
        return promise;
    }

}

export default HttpService; //it is like module.export ...
