import { Component, Input, OnInit } from '@angular/core';
import { Credit } from 'src/app/core/model/Credit';
import { Payement } from 'src/app/core/model/Payement';
import { TestService } from 'src/app/core/service/test.service';

@Component({
  selector: 'app-payements-by-credit',
  templateUrl: './payements-by-credit.component.html',
  styleUrls: ['./payements-by-credit.component.css']
})
export class PayementsByCreditComponent implements OnInit {
  @Input() credit:Credit ;
  listPayement: Payement [] ;

  constructor(private PayementService : TestService) { }

  ngOnInit(): void {
    this.PayementService.getpayementsByCredit(this.credit).subscribe(res=>this.listPayement=res)
  }

}
