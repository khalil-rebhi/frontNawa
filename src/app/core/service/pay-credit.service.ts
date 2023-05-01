import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransferRequest } from '../model/TransferRequest';
import { User } from '../model/User';
import { map } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class PayCreditService {
 

  constructor(private service:HttpClient) { }
  public payCredit (transferRequest : TransferRequest , user : User){
    return this.service.post('http://localhost:8089/nawa/pay/transfer',transferRequest);
  }
}
