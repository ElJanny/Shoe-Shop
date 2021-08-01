import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutManagerService {

  private layoutState = new BehaviorSubject<number>(2);

  constructor() { }

  getLayoutState(): Observable<number>{
    return this.layoutState.asObservable();
  }

  setLayoutState(state:number){
    this.layoutState.next(state);
  }
}
