import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
}

// Get all carts
// fetch('https://fakestoreapi.com/carts')
// Add a new product
// fetch('https://fakestoreapi.com/carts',{
//             method:"POST",
//             body:JSON.stringify(
//                 {
//                     userId:5,
//                     date:2020-02-03,
//                     products:[{productId:5,quantity:1},{productId:1,quantity:5}]
//                 }
//             )
//         })
//             .then(res=>res.json())
//             .then(json=>console.log(json))
