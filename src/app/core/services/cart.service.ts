import { TableContent } from './../model/shoe.model';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Shoe } from '../model/index';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private cookieService: CookieService) { }

  getCart(): TableContent[]{
    if(this.cookieService.check(CookieName)){
      return JSON.parse(this.cookieService.get(CookieName));
    }else{
      return [];
    }
  }

  setCart(shoe: TableContent[]): TableContent[]{
    this.cookieService.set(CookieName,JSON.stringify(shoe));
    return this.getCart();
  }

  addCart(shoe:Shoe,quantity: number,selectedSize: number): TableContent[]{
    let cart: TableContent[] = this.getCart();
    let find: boolean = false;
    cart.forEach((element)=>{
      if(element.shoeId === shoe.shoeId && element.selectedSize === selectedSize){
        element.quantity+=quantity;
        find=true;
      }
    });

    if(!find){
      cart.push(Object.assign({selectedSize:selectedSize,quantity:quantity},shoe));
    }

    return this.setCart(cart);
  }

  addContentToCart(content:TableContent): TableContent[]{
    let cart: TableContent[] = this.getCart();
    let find: boolean = false;

    cart.forEach((element)=>{
      if(element.shoeId === content.shoeId && element.selectedSize === content.selectedSize){
        element.quantity+=content.quantity;
        find=true;
      }
    });

    if(!find){
      cart.push(content);
    }

    return this.getCart();
  }

  removeCart(shoe:TableContent): TableContent[]{
    let tmp: TableContent[] = this.getCart()
    const index: number = tmp.indexOf(shoe);
    return this.setCart(tmp.splice(index));
  }

  deleteCart(): TableContent[]{
    return this.setCart([]);
  }

}

const CookieName = 'cart';
