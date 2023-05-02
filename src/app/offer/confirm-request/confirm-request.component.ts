import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offer } from 'src/app/core/model/Offer';
import { OfferService } from 'src/app/core/service/offer.service';

@Component({
  selector: 'app-confirm-request',
  templateUrl: './confirm-request.component.html',
  styleUrls: ['./confirm-request.component.css']
})
export class ConfirmRequestComponent implements OnInit {

  @Input() offer : Offer;
  spinner : boolean = true;

  constructor(private offerService:OfferService, private router:Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.spinner = false;
    }, 5000);
    console.log(this.offer);
    
  }

  submit(){
    this.offerService.confirmOffer(this.offer).subscribe(res => {
      this.router.navigateByUrl('client/offer/offers');
    })  
  }

}
