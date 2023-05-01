import { Credit } from "./Credit";
import { User } from "./User";

export class Payement{
    idPayement : number;
    amount : number;
    payementDate : Date;
    paymentMethod: string;
    score: number ;
    user : User ;
    credit : Credit ;
}