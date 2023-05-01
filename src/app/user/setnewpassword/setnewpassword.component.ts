import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Renderer2 } from '@angular/core';
import { UserService } from 'src/app/core/service/user.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-setnewpassword',
  templateUrl: './setnewpassword.component.html',
  styleUrls: ['./setnewpassword.component.css']
})
export class SetnewpasswordComponent implements OnInit {

  alertstyle: string; 
  alertmessage: string;
  formvalidation : string = "";
  resettoken : string ;
  readonly styles:string[] = [
    "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
  ];
  constructor(private titleService:Title, private renderer : Renderer2, private userService : UserService, private _Activatedroute :ActivatedRoute) { }

  ngOnInit(): void {
    this.styles.forEach(element => {
      const linkElement = this.renderer.createElement('link');
      this.renderer.setAttribute(linkElement, 'rel', 'stylesheet');
      this.renderer.setAttribute(linkElement, 'href', element);
      this.renderer.appendChild(document.head, linkElement);
    });
    this.titleService.setTitle('New Password');
    this.resettoken=this._Activatedroute.snapshot.paramMap.get("resettoken") as string;
    console.log(this.resettoken);
  }

  Resetpassword(resetpassForm: NgForm): void{
    this.formvalidation = "was-validated";    
    if(resetpassForm.valid && resetpassForm.value.newpass.trim() != ""){
      if(resetpassForm.value.newpass == resetpassForm.value.confirmpass){
        this.resetpasswordrequest(this.resettoken, resetpassForm.value.newpass);
      }else{
        this.alertstyle="danger";
        this.alertmessage="Your password is not matching with the confirm field !";        
        console.log(this.alertmessage);
      }
    }
  }

  resetpasswordrequest(tokenrest : any , newpass : any): void{
    this.userService.resetpassword2(tokenrest, newpass).subscribe(
      (res) => {
        console.log('1');
        this.alertstyle="success";
        this.alertmessage="Your password has been successfully changed !";        
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
