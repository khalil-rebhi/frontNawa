import { Component, OnInit } from '@angular/core';
import { BankAccount } from 'src/app/core/model/BankAccount';
import { User } from 'src/app/core/model/User';
import { BankService } from 'src/app/core/service/bank.service';
import { UserService } from 'src/app/core/service/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {

  data: any = []
  user: User;
  bankAccount : BankAccount;
  dataAcc: any = []
  TransSom: Number;
  To: any;

  from: any;
  to: any;
  amount: any;
  result: any;
  constructor(private sr: BankService, private userService: UserService) { }

  getMYBank() {
    if (environment.userid) {
      this.sr.getBankAccountByUser(environment.userid).subscribe((res: any) => {
        this.bankAccount = res;
      });
    }
  }
  somme: Number;

  AddAmount() {


    this.sr.AddAmount(this.bankAccount.idBankAccount, this.somme).subscribe((res: any) => {
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

    this.sr.Transact(this.To, this.bankAccount.idBankAccount, somme).subscribe((res: any) => {
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
    console.log(amount);
    this.sr.Convert(amount).subscribe((res: any) => {
      
      this.result = res;
      console.log(res)
    }
    )
  }
  ngOnInit(): void {
    this.userService.getUser(environment.userid).subscribe(res => this.user = res);
    this.getMYBank();
    this.getdata();
  }

}
