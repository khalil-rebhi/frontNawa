import { Injectable } from '@angular/core';
import { Credit } from '../model/Credit';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SimulateService {

  constructor(private http:HttpClient) { }

  public simulate(credit:Credit) {
     return this.http.post('http://localhost:8089/nawa/pay/simulate',credit) ;
    
  }
}
