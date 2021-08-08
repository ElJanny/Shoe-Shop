import { CartService } from './../../../core/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Shoe ,TableContent} from 'src/app/core/model';

@Component({
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public tableContent: TableContent[] = [];
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getCart();
  }

  getCart(): void{
    this.tableContent = this.cartService.getCart();
  }

  removeCart(shoe:TableContent): void{
    this.tableContent = this.cartService.removeCart(shoe);
  }

  deleteCart(): void{
    this.tableContent = this.cartService.deleteCart();
  }

  addCart(shoe: TableContent): void{
    this.tableContent = this.cartService.addContentToCart(shoe);
  }
}

