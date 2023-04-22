import { Injectable } from '@angular/core';
import { Credit } from '../model/Credit';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SimulateService {

  constructor(private http:HttpClient) { }

  public getCredits() : Observable<Credit[]> {
     return this.http.get<Credit[]>('http://localhost:8089/nawa/credit/show') ;
    
  }
}
