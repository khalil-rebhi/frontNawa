import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  constructor(private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    let route = window.location.href;
    let myArray = route.split('/');
    if (myArray.includes('admin')) {
      this.router.navigateByUrl('admin/offer');
    }else if(myArray.includes('client')){
      this.router.navigateByUrl('client/offer/offers');
    }
    
  }

}
