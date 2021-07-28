import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export abstract class JSONService<T>{

  constructor(protected httpClient: HttpClient,protected path:string) { }

  getAllJSON(): Observable<T[]>{
    return this.httpClient.get<T[]>(this.path);
  }
}
