import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Offer } from '../model/Offer';
import { Observable } from 'rxjs';
import { OfferRequest } from '../model/OfferRequest';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private http:HttpClient) { }

  getOffers() : Observable<Offer[]>{
    return this.http.get<Offer[]>('http://127.0.0.1:8089/nawa/offer/show');
  }

  getOffer(id : number) : Observable<Offer>{
    return this.http.get<Offer>(`http://127.0.0.1:8089/nawa/offer/show/${id}`)
  }

  getOfferRequests(offerId: number) : Observable<OfferRequest[]>{
    return this.http.get<OfferRequest[]>(`http://127.0.0.1:8089/nawa/request/show/Offer/${offerId}`);
  }

  deleteOffer(offer : Offer){
    return this.http.delete(`http://127.0.0.1:8089/nawa/offer/delete/${offer.idOffer}`).subscribe();
  }

  addOffer(offer : Offer){
    return this.http.post(`http://127.0.0.1:8089/nawa/offer/add`,offer);
  }

  editOffer(offer : Offer){
    return this.http.put(`http://127.0.0.1:8089/nawa/offer/edit/${offer.idOffer}`,offer);
  }

  generateOffer(requestOffer : OfferRequest){
    return this.http.post(`http://127.0.0.1:8089/nawa/offer/propose/kmeans`,requestOffer);
  }
}
