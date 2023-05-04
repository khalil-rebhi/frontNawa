import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payement } from '../model/Payement';
import { Credit } from '../model/Credit';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  paiements: any[];

  constructor(private http:HttpClient) { }
 
 
  public getAllpayements() : Observable<Payement[]>{

  return this.http.get<Payement[]>('http://localhost:8089/nawa/pay/show') ;
 }


 public getpayementsByCredit( credit : Credit) : Observable<Payement[]>{

  return this.http.post<Payement[]>('http://localhost:8089/nawa/pay/showPayementByCredit',credit) ;
 }

 addProduct(payement : Payement) {
  return this.http.post('http://localhost:8089/nawa/pay/save', payement)
}

deleteProduct(idProduct : any){
  return  this.http.delete(`http://localhost:8089/nawa/pay/delete/${idProduct}`)
}

}
