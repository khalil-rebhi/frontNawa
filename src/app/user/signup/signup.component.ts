import { Component, OnInit, Renderer2 } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Role } from 'src/app/core/model/Role';
import { User } from 'src/app/core/model/User';
import { UserService } from 'src/app/core/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  role : Role;
  user : User;
  firstname : string;
  lastname : string;
  password: string;
  confirmpassword: string;
  cin : number;
  dateOfBirth : Date;
  email : string;
  phoneNumber : number;
  picture: string;
  isEmployed : boolean;
  formvalidation : string = "";
  validateconfirmpassword : string="";
  alertmessage: string="";

  readonly styles:string[] = [
    "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
  ];
  constructor(private renderer : Renderer2, private titleService: Title, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.styles.forEach(element => {
      const linkElement = this.renderer.createElement('link');
      this.renderer.setAttribute(linkElement, 'rel', 'stylesheet');
      this.renderer.setAttribute(linkElement, 'href', element);
      this.renderer.appendChild(document.head, linkElement);
    });
    this.titleService.setTitle('Login Page');
    this.user = new User();
  }

  

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.getBase64(file).then((result: string | ArrayBuffer | null) => {
      this.picture = result as string;
    });
  }

  getBase64(file: File): Promise<string | ArrayBuffer | null> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  validateconfpass(e : any){
    if(this.password == this.confirmpassword){
      this.validateconfirmpassword="";
    }
  }

  signupuser(signupForm : NgForm){
    this.formvalidation = "was-validated";
    console.log(signupForm.valid);
    if(this.password !=null && this.password != this.confirmpassword){
      this.validateconfirmpassword="please confirm your password";
    }
    if(signupForm.valid){
      if(this.password !=null && this.password == this.confirmpassword){
        this.user.firstName = this.firstname;
        this.user.lastName = this.lastname;
        this.user.password = this.password;
        this.user.cin = this.cin ;
        this.user.dateOfBirth = this.dateOfBirth;
        this.user.email = this.email;
        this.user.phoneNumber = this.phoneNumber;
        this.user.isEmployed = this.isEmployed;
        this.user.picture = this.picture;
        this.user.role = Role.CLIENT;
        this.user.isVerified = false ;
        this.userService.signup(this.user).subscribe(
          response => {
            //this.alertmessage ="valid authentication";
            this.router.navigate(['user/login']);
            // Handle the response from the backend
          },
          error => {
            console.error('Error adding user:', error);
            this.alertmessage = error;
            // Handle the error
          }
        );
      }
    }

    console.log(this.user);
    console.log(signupForm.value);
    console.log(this.firstname);
    console.log(this.password);
    console.log(this.isEmployed);
    console.log(this.dateOfBirth);
    console.log(this.email);
    console.log(this.phoneNumber);
    console.log(this.cin);

  }

}
