import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payement } from '../model/Payement';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  paiements: any[];

  constructor(private http:HttpClient) { }
 
 
  public getAllpayements() : Observable<Payement[]>{

  return this.http.get<Payement[]>('http://localhost:8089/nawa/pay/show') ;
 }

 addProduct(payement : Payement) {
  return this.http.post('http://localhost:8089/nawa/pay/save', payement)
}

deleteProduct(idProduct : any){
  return  this.http.delete(`http://localhost:8089/nawa/pay/delete/${idProduct}`)
}

}
