import { DefaultModel } from "./default-model.model";

export interface Shoe extends DefaultModel{
  shoeId:number;
  price:number;
  name: string;
  color: COLOR[];
  size: number[];
}


 export enum COLOR{
  RED = "red",
  GREEN = "green"
}

export interface TableContent extends Shoe{
  quantity: number;
  selectedSize: number;
}
