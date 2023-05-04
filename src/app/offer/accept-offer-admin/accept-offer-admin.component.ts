import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Offer } from 'src/app/core/model/Offer';
import { CreditService } from 'src/app/core/service/credit.service';
import { OfferService } from 'src/app/core/service/offer.service';

@Component({
  selector: 'app-accept-offer-admin',
  templateUrl: './accept-offer-admin.component.html',
  styleUrls: ['./accept-offer-admin.component.css']
})
export class AcceptOfferAdminComponent implements OnInit {
  @Input() offer: Offer;
  @Output() showAccept = new EventEmitter<void>();

  constructor(private creditService:CreditService, private offerRequestService:OfferService) { }

  ngOnInit(): void {
  }

  acceptCredit(){
    this.offer.credit.acceptDate = new Date();
    this.offer.credit.creditStartDate = new Date();
    this.offer.credit.isPayed = false;   
    this.offerRequestService.getOfferRequests(this.offer.idOffer).subscribe(res => {
      this.offer.credit.user = res[0].user;
      this.creditService.acceptCredit(this.offer).subscribe(result =>{
        this.showAccept.emit();
      }
      );
    }
    )}; 

  }

