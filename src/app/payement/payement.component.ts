import { Component, OnInit } from '@angular/core';
import { PayementService } from '../core/service/payement.service';
import { Payement } from '../core/model/Payement';
import { TestService } from '../core/service/test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payement',
  templateUrl: './payement.component.html',
  styleUrls: ['./payement.component.css'],
 // providers : [PayementService]
})
export class PayementComponent implements OnInit {
  listPayement : Payement[] = [] ;
  payement !: Payement ;
  form : boolean = false;
  
  constructor(private service:TestService,private router:Router) { }

  ngOnInit(): void {
    this.payement = new Payement();
    
    this.service.getAllpayements().subscribe(res=>{console.log(res);
      this.listPayement=res});

      
      
  }

  // deleteProduct(idProduct : any){
  //   this.service.deleteProduct(idProduct).subscribe(() => {this.router.navigateByUrl('/admin/payement');
     
  // })

   deleteProduct(payement : Payement){
     this.service.deleteProduct(payement.idPayement).subscribe(res => {
      let index = this.listPayement.indexOf(payement);
      this.listPayement.splice(index,1);
     
   });

  }

 
  

}
