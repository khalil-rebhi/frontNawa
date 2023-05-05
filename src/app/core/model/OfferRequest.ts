import { Offer } from "./Offer";
import { User } from "./User";

export class OfferRequest {
    idOfferRequest :number;
    businessAddress : string;
    gouvernorat : string;
    businessType : string;
    experience : number;
    description : string;
    offer : Offer;
    user : User;
}