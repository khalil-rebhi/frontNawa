import { Component, OnInit } from '@angular/core';
import { OfferService } from '../../core/service/offer.service';
import { Offer } from '../../core/model/Offer';

@Component({
  selector: 'app-list-offer',
  templateUrl: './list-offer.component.html',
  styleUrls: ['./list-offer.component.css']
})
export class ListOfferComponent implements OnInit {

  listOffer : Offer[];

  constructor(private offerService:OfferService) { }

  ngOnInit(): void {
    this.offerService.getOffers().subscribe(result => {
      this.listOffer = result.filter(element => !element.isGenerated)
      this.listOffer.forEach(element => element.typeOffer=element.typeOffer.replace('_',' '));
      console.log(this.listOffer);
      
    });
  }

}
