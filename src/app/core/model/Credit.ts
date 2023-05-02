import { Offer } from "./Offer";
import { User } from "./User";

export class Credit{
    idCredit:number;
    creditStartDate: Date;
    creditEndDate:Date;
    amount:number;
    duration : number;
    interestRate: number;
    acceptDate: Date;
    isPayed: Boolean;
    offer: Offer;
    user : User;
}