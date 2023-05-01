import { Component, OnInit } from '@angular/core';
import { BankService } from 'src/app/core/service/bank.service';

@Component({
  selector: 'app-add-bank',
  templateUrl: './add-bank.component.html',
  styleUrls: ['./add-bank.component.css']
})
export class AddBankComponent implements OnInit {

  RiB!:Number;
  Balance!:Number;
  user: any = {
    "idUser": 1,
    "lastName": "client",
    "firstName": "client",
    "cin": 123456,
    "dateBirth": null,
    "phoneNumber": 23456784,
    "email": "client@gmail.com",
    "isEmployed": null,
    "isVerified": null,
    "role": "CLIENT",
    "account": null
  };
  constructor(private sr:BankService) { }

  addBank(){
    let data:any={
      rib:this.RiB,
      balance:this.Balance,
      user:this.user

    }
    this.sr.addBank(data).subscribe((res)=>{
      console.log(res);
    })
  }
  ngOnInit(): void {
  }

}
