import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/user/login/login.component';
@Injectable({
  providedIn: 'root'
})
export class ConnectivityGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (localStorage.getItem("token")!=null && localStorage.getItem("role") == "SUPER_ADMIN") {
          LoginComponent.userloggedIn=true;
          return true; 
      } else {
        LoginComponent.userloggedIn=false;
        this.router.navigate(['/notfound']);
      }
    return true;
  }
  /*
  constructor(private router: Router) {}
  //: Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
      if (localStorage.getItem("token")!=null) {
        //this.expdate.setMilliseconds(parseInt(environment.adminsessionexp));
          HomeComponent.loggedIn=true;
          return true; 
      } else {
        HomeComponent.loggedIn=false;
        this.router.navigate(['/notfound']);
      }
    return false;
  }
  */
}

