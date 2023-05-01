import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { log } from 'console';
import { Payement } from 'src/app/core/model/Payement';
import { TestService } from 'src/app/core/service/test.service';

@Component({
  selector: 'app-add-payement',
  templateUrl: './add-payement.component.html',
  styleUrls: ['./add-payement.component.css']
})
export class AddPayementComponent implements OnInit {
  
  payement : Payement;
  constructor(private service:TestService ,private router:Router) { }

  ngOnInit(): void {

    
    this.payement = new Payement();
    this.payement.payementDate = new Date();
    console.log(this.payement);
    
  }

  addProduct(payement: any){
    this.service.addProduct(payement).subscribe(() => {this.router.navigateByUrl('');
     
    });
  }

}
