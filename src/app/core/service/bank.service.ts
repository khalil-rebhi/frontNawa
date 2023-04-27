import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(
    public http: HttpClient,
  ) { }

  addBank(bank: any) {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post("http://127.0.0.1:1919/nawa/Acount/add", bank, { headers });
  }

  getAll() {
    return this.http.get("http://127.0.0.1:1919/nawa/Acount/show")
  }

  deletAcount(idAcount: any) {

    return this.http.delete("http://127.0.0.1:1919/nawa/Acount/delete/" + idAcount)
  }

  getBankAccountbyid(id: any) {
    return this.http.get("http://127.0.0.1:1919/nawa/Acount/show/" + id)
  }


  AddAmount(id: any, amount: any) {
    const headers = { 'Content-Type': 'application/json' };

    return this.http.put("http://127.0.0.1:1919/nawa/Acount/verse/" + id, amount, { headers })
  }

  Transact(idS: any,idR:any, amount: any) {
    const headers = { 'Content-Type': 'application/json' };

    return this.http.put("http://127.0.0.1:1919/nawa/Acount/verse/"+idS+"/"+idR, amount, { headers })
  }

  Convert(amount: any) {
    const headers = { 'Content-Type': 'application/json' };

    return this.http.post("http://127.0.0.1:1919/nawa/currency-converter/convert", amount, { headers })
  }

}
