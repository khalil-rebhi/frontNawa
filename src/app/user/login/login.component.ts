import { Component, OnInit, Renderer2, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser'
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { LoginService } from 'src/app/core/service/login.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

declare const google: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  static userloggedIn: boolean;

  alertstyle: string; 
  alertmessage: string;
  formModel = {
    email: '',
    password: ''
  }

  

  readonly styles:string[] = [
    "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
  ];
  constructor(private titleService:Title, private loginservice: LoginService, 
    private renderer : Renderer2, private router: Router, private http: HttpClient) { }
  ngOnInit(): void {
    
    this.styles.forEach(element => {
      const linkElement = this.renderer.createElement('link');
      this.renderer.setAttribute(linkElement, 'rel', 'stylesheet');
      this.renderer.setAttribute(linkElement, 'href', element);
      this.renderer.appendChild(document.head, linkElement);
    });
    this.titleService.setTitle('Login Page');
    if(LoginComponent.userloggedIn == false){
      this.alertstyle= "danger";
    }
    if(environment.token != null){
      //window.location.href="admin-space";
      this.alertstyle= "success";
    }
}
  //24856436650-3ggicfirq977lv060610gpgmsa98dh6j.apps.googleusercontent.com


  get userloggedIn() {
    return LoginComponent.userloggedIn;
  }

  private initSession(authResult : any) {
    localStorage.setItem('userid', authResult.userid);
    localStorage.setItem('role', authResult.role);
    localStorage.setItem("token", authResult.token);
    localStorage.setItem("email", authResult.email);
    localStorage.setItem("picture",authResult.picture);
}

onLogin(form: NgForm) {
  if (form.valid == false){
    this.alertstyle = "danger";
    this.alertmessage ="Please enter a valid email and password";
  }
  else {
    this.loginservice.login(form.value).subscribe(
      (res: any) => {
        LoginComponent.userloggedIn = true;
        console.log(res);
        this.initSession(res);
          //window.location.href="admin-space";
          if (res.role == "SUPER_ADMIN"){
            console.log(res.role);
            this.router.navigate(['/admin']);
          }
          else if (res.role != "SUPER_ADMIN"){
            console.log(res.role);
            this.router.navigate(['/client']);
          }
          this.alertstyle = "success";
          this.alertmessage ="valid authentication";
          },
      err => {
        LoginComponent.userloggedIn = false;
        this.alertstyle = "danger";
        this.alertmessage ="Error accured , please verify your fields";
      }
    );
  }
}

}
