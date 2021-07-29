import { DefaultModel } from "./default-model.model";

export interface Shoe extends DefaultModel{
  price:number;
  name: string;
  color: COLOR;
}


enum COLOR{
  RED = "red",
  GREEN = "green"

}
