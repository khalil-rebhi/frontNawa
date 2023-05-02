import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Credit } from '../model/Credit';
import { Offer } from '../model/Offer';

@Injectable({
  providedIn: 'root'
})
export class CreditService {

  constructor(private http:HttpClient) { }

  getAllCredit(): Observable<Credit[]>{
    return this.http.get<Credit[]>('http://127.0.0.1:8089/nawa/credit/show');
  }

  deleteCredit(credit : Credit){
    return this.http.delete(`http://127.0.0.1:8089/nawa/credit/delete/${credit.idCredit}`);
  }

  acceptCredit(offer : Offer){
    return this.http.post('http://127.0.0.1:8089/nawa/credit/accept', offer);
  }

  getOneCredit(idCredit : number): Observable<Credit>{
    return this.http.get<Credit>(`http://127.0.0.1:8089/nawa/credit/show/${idCredit}`)
  }
}
