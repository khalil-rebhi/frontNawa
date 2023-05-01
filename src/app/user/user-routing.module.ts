import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { GetusersComponent } from './getusers/getusers.component';
import { GetuserComponent } from './getuser/getuser.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { SetnewpasswordComponent } from './setnewpassword/setnewpassword.component';

const routes: Routes = [{ path : '', component:UserComponent, children:[   
  { path: 'login', component: LoginComponent},
  { path: 'sign_up', component: SignupComponent},
  { path: 'getallusers', component: GetusersComponent},
  { path: 'getuser', component: GetuserComponent},
  { path: 'changepassword', component: ChangepasswordComponent},
  { path: 'forgotpassword', component: ForgotpasswordComponent},
  { path: 'setnewpassword/:resettoken' , component: SetnewpasswordComponent}


]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
