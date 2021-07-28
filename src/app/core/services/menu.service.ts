import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuButton } from '../model';
import { JSONService } from './json.service';


@Injectable({
  providedIn: 'root'
})
export class MenuService extends JSONService<MenuButton> {
  constructor(httpClient:HttpClient) {
    super(httpClient,path);
   }
}

const path = '';
