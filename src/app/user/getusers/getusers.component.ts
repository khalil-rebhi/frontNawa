import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/service/user.service';
import { User } from 'src/app/core/model/User';
import { Role } from 'src/app/core/model/Role';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getusers',
  templateUrl: './getusers.component.html',
  styleUrls: ['./getusers.component.css']
})
export class GetusersComponent implements OnInit {


  verifyuserid : number ;
  user : User ;
  role : Role;
  firstname : string;
  lastname : string;
  cin : number;
  dateOfBirth : Date;
  email : string;
  phoneNumber : number;
  isVerified : boolean;
  formvalidation : string = "";
  alertmessage: string="";

  users : any[] = [];
  readonly styles:string[] = [
    "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
    "/assets/admin/css/style.css",
    "/assets/admin/plugins/chartist-plugin-tooltips/css/chartist-plugin-tooltip.css",
    "/assets/admin/plugins/chartist/css/chartist.min.css"
  ];

  readonly js: string[]=[
    '/assets/admin/plugins/common/common.min.js',
    '/assets/admin/js/settings.js',
    '/assets/admin/js/custom.min.js',
    '/assets/admin/js/gleek.js',
    '/assets/admin/js/styleSwitcher.js',
    '/assets/admin/js/dashboard/dashboard-1.js',
  ];

  
    
    // Add more user objects as needed
  ;
  constructor(private userService:UserService, private router : Router) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(res => this.users = res)
    this.user = new User();
  }


  deleteUser(idUser : any ){
    this.userService.DeleteUser(idUser).subscribe(res=>{
      let index= this.users.indexOf(User);
      this.users.splice(index,1);
    });
  }

  refreshPage(): void{
    this.userService.getAllUsers().subscribe(res => this.users = res)

  }


  verifyuser() : void {

    if (this.verifyuserid!=null ){
      this.userService.verifyuser(this.verifyuserid).subscribe((res) =>{
        this.refreshPage();
      },
      (err) =>
      {
        console.log("error");
      });
      
    }
  }

  verifuser(cin : any){
    this.verifyuserid = cin;

  }

  edituser(editForm : NgForm){
    this.formvalidation = "was-validated";
    console.log(editForm.valid);
    if(editForm.valid){
      
        this.user.firstName = this.firstname;
        this.user.lastName = this.lastname;
      
        this.user.cin = this.cin ;
        this.user.dateOfBirth = this.dateOfBirth;
        this.user.email = this.email;
        this.user.phoneNumber = this.phoneNumber;
        this.user.isVerified = this.isVerified;
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

    console.log(this.user);
    console.log(editForm.value);
    console.log(this.firstname);
    console.log(this.isVerified);
    console.log(this.dateOfBirth);
    console.log(this.email);
    console.log(this.phoneNumber);
    console.log(this.cin);

  }

}
