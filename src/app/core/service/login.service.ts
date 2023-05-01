import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../model/User';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }

  login(formModel : any) {
    return this.http.post(environment.nawaUrl + "user/login", formModel);
  }

  logout(){
    return this.http.get(environment.nawaUrl+"users/logout/"+ environment.userid);
  }

  
  
}
