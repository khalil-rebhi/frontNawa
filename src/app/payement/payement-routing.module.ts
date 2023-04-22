import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayementComponent } from './payement.component';
import { AddPayementComponent } from './add-payement/add-payement.component';

const routes: Routes = [{ path : '', component:PayementComponent, children:[
  {path:'add',component:AddPayementComponent}
  
]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayementRoutingModule { }
