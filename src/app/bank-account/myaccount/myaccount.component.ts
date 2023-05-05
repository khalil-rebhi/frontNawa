import { Component, OnInit } from '@angular/core';
import { BankAccount } from 'src/app/core/model/BankAccount';
import { User } from 'src/app/core/model/User';
import { BankService } from 'src/app/core/service/bank.service';
import { UserService } from 'src/app/core/service/user.service';
import { environment } from 'src/environments/environment';
interface Country {
  name: string;
  currencyCode: string;
  flagUrl: string;
}

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {
  countries: Country[] = [
 { name: "United States", currencyCode: "USD", flagUrl: "https://flagcdn.com/40x30/us.png" },
 { name: "United Kingdom", currencyCode: "GBP", flagUrl: "https://flagcdn.com/40x30/gb.png" },
 { name: "Canada", currencyCode: "CAD", flagUrl: "https://flagcdn.com/40x30/ca.png" },
 { name: "Australia", currencyCode: "AUD", flagUrl: "https://flagcdn.com/40x30/au.png" },
 { name: "Japan", currencyCode: "JPY", flagUrl: "https://flagcdn.com/40x30/jp.png" },
 { name: "Switzerland", currencyCode: "CHF", flagUrl: "https://flagcdn.com/40x30/ch.png" },
 { name: "New Zealand", currencyCode: "NZD", flagUrl: "https://flagcdn.com/40x30/nz.png" },
 { name: "South Africa", currencyCode: "ZAR", flagUrl: "https://flagcdn.com/40x30/za.png" },
 { name: "India", currencyCode: "INR", flagUrl: "https://flagcdn.com/40x30/in.png" },
 { name: "Eurozone", currencyCode: "EUR", flagUrl: "https://flagcdn.com/40x30/eu.png" },
];

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
