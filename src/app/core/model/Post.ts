import { User } from "./User";

export class Post{
    idPost : number;
    text : string;
    score : number=0;
    likes : number=0;
    user : User;
}