import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/model/User';
import { UserService } from 'src/app/core/service/user.service';
import { Renderer2 } from '@angular/core';
import { Role } from 'src/app/core/model/Role';
import { environment } from 'src/environments/environment';
import { NgForm } from '@angular/forms';
import { env } from 'process';
@Component({
  selector: 'app-getuser',
  templateUrl: './getuser.component.html',
  styleUrls: ['./getuser.component.css']
})
export class GetuserComponent implements OnInit {


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
  users : User[] = [];
  role : Role;
  firstname : string ;
  lastname : string;
  password: string;
  confirmpassword: string;
  cin : number;
  dateOfBirth : Date;
  email : string;
  phoneNumber : number;
  picture: string;
  isEmployed : boolean;
  isVerified : boolean;
  formvalidation : string = "";
  validateconfirmpassword : string="";
  alertmessage: string="";
  enablebutton: boolean=true;

  constructor(private userService : UserService, private renderer: Renderer2 ) { }

  ngOnInit(): void {
    this.styles.forEach(element => {
      const linkElement = this.renderer.createElement('link');
      this.renderer.setAttribute(linkElement, 'rel', 'stylesheet');
      this.renderer.setAttribute(linkElement, 'href', element);
      this.renderer.appendChild(document.head, linkElement);
    });

    this.userService.getUser(environment.userid).subscribe((user: any) => {
      // Handle the response here and assign it to a variable in your component
      this.user = user;
      this.firstname = this.user.firstName ;
      this.lastname = this.user.lastName ;
      this.email = this.user.email ;
      this.cin = this.user.cin ;
      this.phoneNumber = this.user.phoneNumber ;
      this.dateOfBirth = this.user.dateOfBirth ;
      this.isEmployed = this.user.isEmployed ;
      this.isVerified = this.user.isVerified ;
    });
  
    //this.userService.getAllUsers().subscribe(res => this.user = res)
  }

  getuser (idUser : any){
    this.userService.getUser(idUser).subscribe(res => this.user = res)
  }

  updateuser (updateForm : NgForm){
    
    if (this.enablebutton ==false){
      this.formvalidation = "was-validated";
      if(updateForm.valid){
      console.log('1');
       
      this.enablebutton= true;
      this.user.firstName = this.firstname;
      this.user.lastName = this.lastname ;
      this.user.email = this.email  ;
      this.user.cin = this.cin  ;
      this.user.phoneNumber = this.phoneNumber ;
      this.user.dateOfBirth = this.dateOfBirth;
      this.user.isEmployed = this.isEmployed ;
      this.userService.UpdateUser(this.user.idUser, this.user).subscribe(res => this.user = res);
      environment.email = this.user.email;
      console.log(environment);
     }
    }
     else {
      this.enablebutton = false ;
     }
  }

}
