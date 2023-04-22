import { Component, OnInit } from '@angular/core';
import { TransferRequest } from 'src/app/core/model/TransferRequest';
import { PayCreditService } from 'src/app/core/service/pay-credit.service';
import { Router } from '@angular/router';
import { User } from 'src/app/core/model/User';
import { NotifierService } from 'angular-notifier'
@Component({
  selector: 'app-pay-credit',
  templateUrl: './pay-credit.component.html',
  styleUrls: ['./pay-credit.component.css']
})
export class PayCreditComponent implements OnInit {
transfer:TransferRequest ;
user : User;
private readonly notifier: NotifierService;


  constructor(private service:PayCreditService ,private router:Router,notifierService: NotifierService) {
    this.notifier = notifierService;
   }

  ngOnInit(): void {
    this.transfer = new TransferRequest();
  }

  Pay(transfer: any,user:any){
    if (
    this.service.payCredit(transfer,user).subscribe(() => {this.router.navigateByUrl('');
     
    })){
      this.notifier.notify('success', 'You are awesome! I mean it!');
    }else
    {
      this.notifier.notify('success', 'You are awesome! I mean it!');
    };
  }

}
