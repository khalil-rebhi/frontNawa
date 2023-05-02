import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/app/core/model/Offer';
import { OfferService } from 'src/app/core/service/offer.service';

@Component({
  selector: 'app-list-offer-admin',
  templateUrl: './list-offer-admin.component.html',
  styleUrls: ['./list-offer-admin.component.css']
})
export class ListOfferAdminComponent implements OnInit {

  listOffers : Offer[];
  acceptingOffer : Offer | null;

  constructor(private offerService:OfferService) { }

  ngOnInit(): void {
    this.offerService.getOffers().subscribe(result => {
      this.listOffers = result;
      console.log(result);
      
    });
  }

  delete(offer : Offer): void{
    const index = this.listOffers.indexOf(offer); 
    this.listOffers.splice(index,1);
    this.offerService.deleteOffer(offer);
  }

  accept(offer : Offer){
    this.acceptingOffer = offer;
  }

  afterAccept(){
    this.acceptingOffer = null;
  }

}
