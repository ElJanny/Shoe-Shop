import { MenuService } from './../../core/services/menu.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuButton, ButtonType } from 'src/app/core/model';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public menuButtons: Observable<MenuButton[]> = this.menuService.getAllJSON();
  public buttonType = ButtonType;
  public displayShoeButton: string = "none"
  constructor(private menuService: MenuService){}

  ngOnInit(): void {}

  setDisplayShoeButton():void{
    if(this.displayShoeButton=='none')
    {
      this.displayShoeButton='block';
    }
    else
    {
      this.displayShoeButton='none';
    }
  }
}
