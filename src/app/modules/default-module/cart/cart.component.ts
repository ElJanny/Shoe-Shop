import { CartService } from './../../../core/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Shoe } from 'src/app/core/model';

@Component({
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public shoes: Shoe[] = [];
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getCart();
  }

  getCart(){
    this.shoes = this.cartService.getCart();
  }

  removeCart(shoe:Shoe): void{
    this.cartService.removeCart(shoe);
  }

  deleteCart(){
    this.cartService.deleteCart();
  }

  addCart(shoe: Shoe){

  }

}
