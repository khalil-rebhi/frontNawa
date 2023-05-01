import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Renderer2 } from '@angular/core';
import { UserService } from 'src/app/core/service/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})

  

export class ForgotpasswordComponent implements OnInit {

  alertstyle: string; 
  alertmessage: string;
  email : string ;
  formvalidation : string = "";


  readonly styles:string[] = [
    "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
  ];
  constructor(private titleService:Title, private renderer : Renderer2, private userService : UserService) { }

  ngOnInit(): void {
    this.styles.forEach(element => {
      const linkElement = this.renderer.createElement('link');
      this.renderer.setAttribute(linkElement, 'rel', 'stylesheet');
      this.renderer.setAttribute(linkElement, 'href', element);
      this.renderer.appendChild(document.head, linkElement);
    });
    this.titleService.setTitle('Reset Password');
  }


  verifyemail(resetpassForm: NgForm): void{
    this.formvalidation = "was-validated";
    if(resetpassForm.valid){
      this.sendrequest(resetpassForm.value.resetemail);
    }
  }

  
  sendrequest(email : any): void{
    this.userService.resetpassword(email).subscribe(
      (res) => {
        console.log('1');
        this.alertstyle="success";
        this.alertmessage="If your email is valid then a link will be sent to reset your passowrd !";        
        console.log(this.alertmessage);
      },
      (err) => {
        console.log('2');
        this.alertstyle="danger";
        this.alertmessage="Error Occured ! we cannot reset your password, please contact the administrator";
        console.log(this.alertmessage);
        
      }
    );
  }

}
