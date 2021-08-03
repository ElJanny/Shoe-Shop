import { DefaultModel } from './default-model.model';
export interface MenuButton extends DefaultModel {
  path: string;
  text: string;
  type: ButtonType;
  menuButtons?: MenuButton[];
}

export enum ButtonType{
  MAINBUTTON = 0,
  SECONDBUTTON = 1,
  SPACER = 2,
  ICON_BUTTON = 3
}
