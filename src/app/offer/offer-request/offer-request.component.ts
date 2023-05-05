import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { Credit } from 'src/app/core/model/Credit';
import { Offer } from 'src/app/core/model/Offer';
import { OfferRequest } from 'src/app/core/model/OfferRequest';
import { User } from 'src/app/core/model/User';
import { OfferService } from 'src/app/core/service/offer.service';
import { UserService } from 'src/app/core/service/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-offer-request',
  templateUrl: './offer-request.component.html',
  styleUrls: ['./offer-request.component.css']
})
export class OfferRequestComponent implements OnInit {

  offerRequest : OfferRequest;
  generatedOffer : Offer;
  disable :boolean = false;
  user : User;

  constructor(private offerService:OfferService, private router:Router, private userService:UserService) { }

  ngOnInit(): void {
    this.offerRequest = new OfferRequest();
    this.offerRequest.offer = new Offer();
    this.offerRequest.offer.credit = new Credit();
    this.userService.getUser(environment.userid).subscribe(res=> this.user = res);
  }

  submitRequest():any{
    this.offerRequest.idOfferRequest = 0;
    this.offerRequest.user = this.user;
    this.offerService.generateOffer(this.offerRequest).subscribe(result => {
      this.generatedOffer = result;
      this.disable = true;
    });
    
  }


}
