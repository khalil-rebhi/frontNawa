import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payement } from '../model/Payement';
@Injectable({
  providedIn: 'root'
})
export class PayementService {

  
  constructor(private http:HttpClient) { }
  getAllProducts() : Observable<Payement[]>{
    return this.http.get<Payement[]>('http://localhost:8089/nawa/pay/show'); }

 
  }

