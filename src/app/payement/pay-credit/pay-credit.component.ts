import { Component, OnInit } from '@angular/core';
import { TransferRequest } from 'src/app/core/model/TransferRequest';
import { PayCreditService } from 'src/app/core/service/pay-credit.service';
import { Router } from '@angular/router';
import { User } from 'src/app/core/model/User';
import { NotifierService } from 'angular-notifier'
import { HttpErrorResponse } from '@angular/common/http';
import { PayCreditResponse } from 'src/app/inetfaces/pay-credit-response';
import { UserService } from 'src/app/core/service/user.service';
import { environment } from 'src/environments/environment';
import { BankService } from 'src/app/core/service/bank.service';

@Component({
  selector: 'app-pay-credit',
  templateUrl: './pay-credit.component.html',
  styleUrls: ['./pay-credit.component.css']
})
export class PayCreditComponent implements OnInit {
transfer:TransferRequest ;
user : User;
private readonly notifier: NotifierService;
response:PayCreditResponse ;

notif : boolean = false ;
wait : boolean = false;




  constructor(private service:PayCreditService ,private router:Router,notifierService: NotifierService, private bankAccountService: BankService ) {
    this.notifier = notifierService;
   }

  ngOnInit(): void {
    this.transfer = new TransferRequest();
    if (environment.userid) {
      this.bankAccountService.getBankAccountByUser(environment.userid).subscribe(res => this.transfer.senderAccountNumber = res.rib);
    }
    this.transfer.receiverAccountNumber = 8822408467953682;
  }

  Pay(transfer: any,user:any){
   // if (
     this.wait = true;
    this.service.payCredit(transfer,user).subscribe(
      (response: any) => {

        // handle success response
        console.log(response.message);
      },
      (error: HttpErrorResponse) => {
        // handle error response
        if (error.status === 400) {
          console.log('Bad Request');
          // this.notifier.show({
          //   type: 'success',
          //   message: 'This is a success notification!',
          //   id: 'notifier__container-list-item'
          //   });
this.notif = true ;
setTimeout(() => { this.notif=false}, 5000);
        } else if (error.status === 401) {
          console.log('Unauthorized');
        } else if (error.status === 404) {
          console.log('Not Found');
        } else {
          console.log('Server AAAA');
          // this.toastr.success('Hello world!', 'Toastr fun!');
          this.notifier.notify('succes','paiement avec succés');
        setTimeout(() => {this.router.navigateByUrl("/client/credits"); this.wait = false;}, 5000);
        }
      }
    );
   
    
    
    
    
    
    
    
  }

}
