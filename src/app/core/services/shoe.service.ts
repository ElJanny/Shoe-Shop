import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Shoe } from '../model/index';
import { JSONService } from './json.service';


@Injectable({
  providedIn: 'root'
})
export class ShoeService extends JSONService<Shoe>{
  constructor(httpClient:HttpClient) {
    super(httpClient,path);
   }
}

const path = '';
