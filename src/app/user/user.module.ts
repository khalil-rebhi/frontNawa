import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GetusersComponent } from './getusers/getusers.component';
import { GetuserComponent } from './getuser/getuser.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { SetnewpasswordComponent } from './setnewpassword/setnewpassword.component';


@NgModule({
  declarations: [
    UserComponent,
    SignupComponent,
    LoginComponent,
    GetusersComponent,
    GetuserComponent,
    ChangepasswordComponent,
    LoginComponent,
    ForgotpasswordComponent,
    SetnewpasswordComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    HttpClientModule
  ]
  
})
export class UserModule { }
