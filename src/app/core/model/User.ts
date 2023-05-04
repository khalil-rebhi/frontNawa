import { BankAccount } from "./BankAccount";
import { Role } from "./Role";

export class User{
    idUser : number;
    lastName : string;
    firstName : string;
    password: string;
    cin : number;
    dateOfBirth : Date;
    email : string;
    picture : string
    phoneNumber : number;
    isEmployed : boolean;
    isVerified : boolean;
    role : Role ;
    bankAccount : BankAccount;
}