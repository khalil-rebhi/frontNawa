import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'; 
import { User } from 'src/app/core/model/User';
import { environment } from 'src/environments/environment';
 

@Injectable({
  providedIn: 'root'
})

  export class UserService {
    adminhttpOptions;
    httpOptions : any;
    user : User ;
    constructor(private http: HttpClient){
     this.adminhttpOptions = {  headers: new HttpHeaders({
      'Authorization': "Bearer " + ""
    })}
  }
    /*login(formData : any) {
      return this.http.post(environment.nawaUrl + "user/add", formData);
    }*/
    getAllUsers(): Observable<any> { return this.http.get(environment.nawaUrl + "user/all", this.adminhttpOptions); }
    DeleteUser(idUser : any ): Observable<any> { return this.http.delete(environment.nawaUrl + "user/delete/"+ idUser, this.adminhttpOptions); }
    getUser(idUser : any): Observable<any> { return this.http.get(environment.nawaUrl + "user/get/"+idUser, this.adminhttpOptions); }
    addUser(user: User): Observable<any>{ return this.http.post<User>("" +"users/add", user, this.adminhttpOptions);}
    UpdateUser(idUser : any , user : User): Observable<any>{ return this.http.put<User>(environment.nawaUrl + "user/update/" + idUser , user , this.adminhttpOptions);}
    signup(user : any){return this.http.post(environment.nawaUrl+ "user/add" , user);}
    verifyuser(cin : any){return this.http.post(environment.nawaUrl + "user/verifyUser/" + cin, this.adminhttpOptions);}
    changepassword(loginmodal : any): Observable<any>{return this.http.post(environment.nawaUrl + "user/changepassword", loginmodal , this.adminhttpOptions);}
    resetpassword(email :any){return this.http.get(environment.nawaUrl + "user/resetpasswordlink/" + email , this.adminhttpOptions);}
    resetpassword2(token:any,newpassword:any){
      this.httpOptions = { headers: new HttpHeaders({'Authorization': "Bearer " + token})}; 
      return this.http.get(environment.nawaUrl + "user/resetforgotpassword?token="+token+"&newpassword="+newpassword,this.httpOptions);}
  }
