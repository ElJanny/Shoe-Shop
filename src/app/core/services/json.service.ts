import { DefaultModel } from './../model/default-model.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export abstract class JSONService<T extends DefaultModel>{

  constructor(protected httpClient: HttpClient,protected path:string) { }

  getAllJSON(): Observable<T[]>{
    return this.httpClient.get<T[]>(this.path);
  }
}
