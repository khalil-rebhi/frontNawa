import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Offer } from 'src/app/core/model/Offer';
import { OfferService } from 'src/app/core/service/offer.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

  offer: Offer;

  constructor(private offerService:OfferService, private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    let idOffer = this.activatedRoute.snapshot.params["id"];
    this.offerService.getOffer(idOffer).subscribe(result => this.offer = result);
  }

  editOffer(){
    this.offerService.editOffer(this.offer).subscribe(result => this.router.navigateByUrl("/admin/offer"));
  }

}
