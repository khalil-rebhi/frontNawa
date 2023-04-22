import { Component, OnInit } from '@angular/core';
import { TransferRequest } from 'src/app/core/model/TransferRequest';
import { PayCreditService } from 'src/app/core/service/pay-credit.service';
import { Router } from '@angular/router';
import { User } from 'src/app/core/model/User';
@Component({
  selector: 'app-pay-credit',
  templateUrl: './pay-credit.component.html',
  styleUrls: ['./pay-credit.component.css']
})
export class PayCreditComponent implements OnInit {
transfer:TransferRequest ;
user : User;
  constructor(private service:PayCreditService ,private router:Router) { }

  ngOnInit(): void {
    this.transfer = new TransferRequest();
  }

  Pay(transfer: any,user:any){
    this.service.payCredit(transfer,user).subscribe(() => {this.router.navigateByUrl('');
     
    });
  }

}
