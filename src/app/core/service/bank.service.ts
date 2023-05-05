import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BankAccount } from '../model/BankAccount';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(
    public http: HttpClient,
  ) { }

  addBank(bank: any) {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post("http://127.0.0.1:8089/nawa/bankaccount/add", bank, { headers });
  }

  getAll() {
    return this.http.get("http://127.0.0.1:8089/nawa/bankaccount/show")
  }

  deletAcount(idAcount: any) {

    return this.http.delete("http://127.0.0.1:8089/nawa/bankaccount/delete/" + idAcount)
  }

  getBankAccountbyid(id: any) {
    return this.http.get("http://127.0.0.1:8089/nawa/bankaccount/show/" + id)
  }


  AddAmount(id: any, amount: any) {
    const headers = { 'Content-Type': 'application/json' };

    return this.http.put("http://127.0.0.1:8089/nawa/bankaccount/verse/" + id, amount, { headers })
  }

  Transact(idS: any,idR:any, amount: any) {
    const headers = { 'Content-Type': 'application/json' };

    return this.http.put("http://127.0.0.1:8089/nawa/bankaccount/verse/"+idS+"/"+idR, amount, { headers })
  }

  Convert(amount: any) {
    const headers = { 'Content-Type': 'application/json' };

    return this.http.post("http://127.0.0.1:8089/nawa/currency-converter/convert", amount, { headers })
  }

  getBankAccountByUser(idUser : string) : Observable<BankAccount>{
    return this.http.get<BankAccount>(`http://127.0.0.1:8089/nawa/bankaccount/show/user/${idUser}`);
  }

}
