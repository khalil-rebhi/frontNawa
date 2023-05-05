import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Credit } from 'src/app/core/model/Credit';
import { CreditService } from 'src/app/core/service/credit.service';
import { UserService } from 'src/app/core/service/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list-credit',
  templateUrl: './list-credit.component.html',
  styleUrls: ['./list-credit.component.css']
})
export class ListCreditComponent implements OnInit {

  listCredit : Credit[];
  isAdmin : boolean = false;
  creditPayment : Credit | null;

  constructor(private creditService:CreditService, private router : Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const currentPath = this.activatedRoute.snapshot.pathFromRoot.filter(element => element.routeConfig?.path == "client");
    if (currentPath.length > 0 && environment.userid) {      
      this.creditService.getCreditByUser(environment.userid).subscribe(result => this.listCredit = result.filter(element => element.acceptDate));
      this.creditPayment = null;
    }else{
    this.creditService.getAllCredit().subscribe(result => this.listCredit = result);
    this.isAdmin = true;
    }
  }

  delete(credit : Credit){
    this.creditService.deleteCredit(credit).subscribe(result => {
      let index = this.listCredit.indexOf(credit);
      this.listCredit.splice(index, 1);
    })
  }

  showPayments(credit : Credit){
    this.creditPayment = credit;
  }
  hidePayments(){
    this.creditPayment = null;
  }

}
