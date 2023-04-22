import { Component, OnInit } from '@angular/core';
import { PayementService } from '../core/service/payement.service';
import { Payement } from '../core/model/Payement';
import { TestService } from '../core/service/test.service';

@Component({
  selector: 'app-payement',
  templateUrl: './payement.component.html',
  styleUrls: ['./payement.component.css'],
 // providers : [PayementService]
})
export class PayementComponent implements OnInit {
  listPayement : Payement[] ;
  payement !: Payement ;
  form : boolean = false;
  
  constructor(private service:TestService) { }

  ngOnInit(): void {
    this.payement = new Payement();
    
    this.service.getAllpayements().subscribe(res=>{console.log(res);
      this.listPayement=res});

      
      
  }
  

}
