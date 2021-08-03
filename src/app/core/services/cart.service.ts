import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Shoe } from '../model/index';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private cookieService: CookieService) { }

  getCart(): Shoe[]{
    if(this.cookieService.check(CookieName)){
      return JSON.parse(this.cookieService.get(CookieName));
    }else{
      return [];
    }
  }

  setCart(shoe: Shoe[]): Shoe[]{
    this.cookieService.set(CookieName,JSON.stringify(shoe));
    return this.getCart();
  }

  addCart(shoe:Shoe[]): Shoe[]{
    return this.setCart(this.getCart().concat(shoe));
  }

  removeCart(shoe:Shoe): Shoe[]{
    let tmp: Shoe[] = this.getCart()
    const index: number = tmp.indexOf(shoe);
    return this.setCart(tmp.splice(index));
  }

  deleteCart(): Shoe[]{
    return this.setCart([]);
  }

}

const CookieName = 'cart';
