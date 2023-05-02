import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Offer } from 'src/app/core/model/Offer';
import { OfferRequest } from 'src/app/core/model/OfferRequest';
import { OfferService } from 'src/app/core/service/offer.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private router:Router, private activatedRoute:ActivatedRoute, private offerService:OfferService) { }

  offer:Offer;
  offerRequests: OfferRequest[];

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id'];
    this.offerService.getOffer(id).subscribe(result =>{
      this.offer = result;   
      this.offer.typeOffer = this.offer.typeOffer.replace('_',' ');
      this.offerService.getOfferRequests(this.offer.idOffer).subscribe(resultat => this.offerRequests = resultat
      )
    });
  }

  goBack(){
    this.router.navigate(['/admin/offer']);
  }

}
