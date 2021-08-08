import { TableContent } from 'src/app/core/model';
import { Component, Input, OnInit } from '@angular/core';
import {COLOR} from './../../../../core/model'



@Component({
  selector: 'app-tablecontent',
  templateUrl: './tablecontent.component.html',
  styleUrls: ['./tablecontent.component.scss']
})
export class TablecontentComponent implements OnInit {

  @Input() tableContent: TableContent[] = [];
  constructor() { }

  ngOnInit(): void {
    this.tableContent= [
      {quantity:3,selectedSize:45,shoeId:1,size:[42,45],color:[COLOR.RED],price:500,name:"test"},
    ]
  }

  countFinalPrice(): number{
    let finalPrice = 0;
    this.tableContent.forEach((content) => {
      finalPrice+= content.quantity * content.price;
    });
    return finalPrice;
  }
}
