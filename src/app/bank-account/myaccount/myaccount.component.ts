import { Component, OnInit } from '@angular/core';
import { BankService } from 'src/app/core/service/bank.service';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {

  data: any = []
  userFirsname: String
  Rib: any;
  balance: any
  idBan: Number = 6
  dataAcc: any = []
  TransSom: Number;
  To: any;

  from: any;
  to: any;
  amount: any;
  result: any;
  constructor(private sr: BankService) { }

  getMYBank() {
    this.sr.getBankAccountbyid(this.idBan).subscribe((res: any) => {
      this.data = res
      this.userFirsname = this.data.user.firstName
      this.Rib = this.data.rib
      this.balance = this.data.balance
      console.log(this.userFirsname)
    }
    )
  }
  somme: Number;

  AddAmount() {


    this.sr.AddAmount(this.idBan, this.somme).subscribe((res: any) => {

      console.log(res)
      this.getMYBank()
    })
  }
  getdata() {
    this.sr.getAll().subscribe((res) => {
      this.dataAcc = res;
      console.log(res);
    })
  }


  Transaction() {
    let somme = this.TransSom;

    this.sr.Transact(this.To, this.idBan, somme).subscribe((res: any) => {
      console.log(res)
      this.getMYBank()
    }
    )


  }

  convert() {
    let amount :any={
      "from":this.from,
      "to":this.to,
      "amount":this.amount
    }
    this.sr.Convert(amount).subscribe((res: any) => {
      this.result = res;
      console.log(res)
    }
    )
  }
  ngOnInit(): void {
    this.getMYBank()
    this.getdata()
  }

}
