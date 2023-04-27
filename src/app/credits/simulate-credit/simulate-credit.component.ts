import { Component, OnInit } from '@angular/core';
import { Credit } from 'src/app/core/model/Credit';
import { SimulateService } from 'src/app/core/service/simulate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-simulate-credit',
  templateUrl: './simulate-credit.component.html',
  styleUrls: ['./simulate-credit.component.css']
})
export class SimulateCreditComponent implements OnInit {
  credit : Credit ;
  simulatedPayments: any[];
 

  constructor(private service:SimulateService,private router:Router) {
    
   }

  ngOnInit(): void {
    this.credit = new Credit();

    
  }
  simulate(credit:any) {
    return this.service.simulate(credit).subscribe(res => {
      this.simulatedPayments = Object.entries(res).map(([key, value]) => ({ id: key, monthlyPayment: value[0], interestPayment: value[1],principal: value[2],amount: value[3] }));
    });
  }

}
