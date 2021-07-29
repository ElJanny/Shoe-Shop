import { Observable } from 'rxjs';
import { LayoutManagerService } from './../layout-manager.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  public layoutState: Observable<number> = this.layoutManagerService.getLayoutState();

  constructor(private layoutManagerService: LayoutManagerService) { }

  ngOnInit(): void {
  }

  setLayoutState(state: number){
    this.layoutManagerService.setLayoutState(state);
  }

}
