import { Credit } from "./Credit";

export class Offer {
    idOffer: number;
    name: string;
    minAmount :number;
    maxAmount : number;
    typeOffer : string;
    isGenerated : boolean;
    demandedAmount : number;
    credit: Credit;
}