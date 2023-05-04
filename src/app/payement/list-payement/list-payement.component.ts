import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Payement } from 'src/app/core/model/Payement';
import { TestService } from 'src/app/core/service/test.service';

@Component({
  selector: 'app-list-payement',
  templateUrl: './list-payement.component.html',
  styleUrls: ['./list-payement.component.css']
})
export class ListPayementComponent implements OnInit {
  listPayement : Payement[] = [] ;
  filteredPaiements: Payement[] = [];
 
  form : boolean = false;
  searchTerm: any = '';

  constructor(private service:TestService,private router:Router) { }

  ngOnInit(): void {
   
    
    this.service.getAllpayements().subscribe(res=>{console.log(res);
      this.listPayement=res});
  }

  deleteProduct(payement : Payement){
    this.service.deleteProduct(payement.idPayement).subscribe(res => {
     let index = this.listPayement.indexOf(payement);
     this.listPayement.splice(index,1);
    
  });

 }

 search (){
  this.service.getpayementsByCredit(this.searchTerm).subscribe(res=>{console.log(res);
  });
 }

}
