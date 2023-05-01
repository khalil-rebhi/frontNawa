import { Component, OnInit } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/service/user.service';
import { User } from 'src/app/core/model/User';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {


  readonly styles:string[] = [
    "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
    "/assets/client/css/client-bootstrap.css",
    "/assets/client/css/style.css",
    "/assets/client/css/reset.css",
    "/assets/client/css/custom.css",
    "/assets/client/css/colorbox.css",
    "/assets/client/css/comments.css",
    "/assets/client/css/contact_form.css",
    "/assets/client/css/elastislide.css",
    "/assets/client/css/featurestab.css",
    "/assets/client/css/font-awesome-ie7.css",
    "/assets/client/css/fonts.css",
    "/assets/client/css/popup.css",
    "/assets/client/css/responsive.css",
    "/assets/client/css/shortcodes.css",
    "/assets/client/css/tipsy.css",
    "/assets/client/css/usquare.css",
    "/assets/client/css/widgets.css"
  ];

  readonly js: string[]=[
    '/assets/client/js/comment-reply.min.js',
    '/assets/client/js/underscore.min.js',
    '/assets/client/js/jquery/jquery.masonry.min.js',
    '/assets/client/sliders/polaroid/js/jquery.polaroid.js',
    '/assets/client/js/jquery.colorbox-min.js',
    '/assets/client/js/jquery.easing.js',
    '/assets/client/js/jquery.carouFredSel-6.1.0-packed.js',
    '/assets/client/js/jQuery.BlackAndWhite.js',
    '/assets/client/js/jquery.touchSwipe.min.js',
    '/assets/client/sliders/polaroid/js/jquery.transform-0.8.0.min.js',
    '/assets/client/sliders/polaroid/js/jquery.preloader.js',
    '/assets/client/js/responsive.js',
    '/assets/client/js/mobilemenu.js',
    '/assets/client/js/jquery.superfish.js',
    '/assets/client/js/jquery.placeholder.js',
    '/assets/client/js/contact.js',
    '/assets/client/js/jquery.tipsy.js',
    '/assets/client/js/jquery.cycle.min.js',
    '/assets/client/js/shortcodes.js',
    '/assets/client/js/jquery/jquery.js',
    '/assets/client/js/jquery.custom.js',
    '/assets/js/jquery/jquery.js'
  ];

  user : User ; 
  alertmessage: string="";
  formvalidation : string = "";
  validateconfirmpassword : string="";
  Actualpassword: string;
  password: string ;
  confirmpassword: string;
  alert : boolean;
  newPassForm = {
    email: '',
    actualpassword: '',
    password: ''
  }

  constructor( private renderer : Renderer2, private titleService : Title, private router : Router, private userService : UserService) { }

  ngOnInit(): void {
    this.styles.forEach(element => {
      const linkElement = this.renderer.createElement('link');
      this.renderer.setAttribute(linkElement, 'rel', 'stylesheet');
      this.renderer.setAttribute(linkElement, 'href', element);
      this.renderer.appendChild(document.head, linkElement);
    });
    this.titleService.setTitle('Reset Password');
  }

  validateconfpass(e : any){
    if(this.password == this.confirmpassword){
      this.validateconfirmpassword="";
    }
  }


  verifyform(changepwdForm : NgForm){
    this.formvalidation = "was-validated";
    if (changepwdForm.valid && changepwdForm.value.password == changepwdForm.value.confirmpassword){
        this.alertmessage ="Are you sure to apply that password?"
        this.alert = true ;
    }
    else {
      this.alertmessage ="Please verify your entries";
      this.alert = false ;
    }
  }


  

  changepwd(changepwdForm : NgForm){
    console.log(changepwdForm.valid);
    this.verifyform(changepwdForm);
    if(this.alert == false){
      return ;
    }
    else {
    
    this.newPassForm.actualpassword = this.Actualpassword;
    if (environment.email != null){  
    this.newPassForm.email = environment.email;
    }
    this.newPassForm.password = this.password;

        this.userService.changepassword(this.newPassForm).subscribe(
          response => {
            //this.alertmessage ="valid authentication";
            this.router.navigate(['user/getuser']);
            // Handle the response from the backend
          },
          error => {
            console.error('Error changing password user:', error);
            this.alertmessage = error;
            // Handle the error
          }); 
    console.log(this.user);
    console.log(changepwdForm.value);
  }
}

}
