import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Credit } from 'src/app/core/model/Credit';
import { CreditService } from 'src/app/core/service/credit.service';

@Component({
  selector: 'app-list-credit',
  templateUrl: './list-credit.component.html',
  styleUrls: ['./list-credit.component.css']
})
export class ListCreditComponent implements OnInit {

  listCredit : Credit[];

  constructor(private creditService:CreditService, private router : Router) { }

  ngOnInit(): void {
    this.creditService.getAllCredit().subscribe(result => this.listCredit = result);
  }

  delete(credit : Credit){
    this.creditService.deleteCredit(credit).subscribe(result => {
      let index = this.listCredit.indexOf(credit);
      this.listCredit.splice(index, 1);
    })
  }

}
