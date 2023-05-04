import { User } from "./User";

export class Comment{
    idComment:number;
    text:string;
    score : number =0;
    likes : number;
    user: User;
}