import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { Credit } from 'src/app/core/model/Credit';
import { Offer } from 'src/app/core/model/Offer';
import { OfferRequest } from 'src/app/core/model/OfferRequest';
import { OfferService } from 'src/app/core/service/offer.service';

@Component({
  selector: 'app-offer-request',
  templateUrl: './offer-request.component.html',
  styleUrls: ['./offer-request.component.css']
})
export class OfferRequestComponent implements OnInit {

  offerRequest : OfferRequest;
  generatedOffer : Offer;

  constructor(private offerService:OfferService) { }

  ngOnInit(): void {
    this.offerRequest = new OfferRequest();
    this.offerRequest.offer = new Offer();
    this.offerRequest.offer.credit = new Credit();
  }

  submitRequest():any{
    console.log(this.offerRequest);
    this.offerRequest.idOfferRequest = 0;
    this.offerService.generateOffer(this.offerRequest).subscribe(result => {
      console.log(result);
      //this.generatedOffer = result;
    });
    
  }


}
