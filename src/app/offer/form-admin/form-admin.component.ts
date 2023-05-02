import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offer } from 'src/app/core/model/Offer';
import { OfferService } from 'src/app/core/service/offer.service';

@Component({
  selector: 'app-form-admin',
  templateUrl: './form-admin.component.html',
  styleUrls: ['./form-admin.component.css']
})
export class FormAdminComponent implements OnInit {

  offer : Offer;
  constructor(private offerService:OfferService, private router:Router) { }

  ngOnInit(): void {
    this.offer = new Offer();
  }

  addOffer(){
    this.offer.isGenerated = false;
    this.offerService.addOffer(this.offer).subscribe(result => this.router.navigateByUrl('/admin/offer'))
  }

}
