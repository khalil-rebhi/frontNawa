import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayementComponent } from './payement.component';
import { AddPayementComponent } from './add-payement/add-payement.component';
import { PayCreditComponent } from './pay-credit/pay-credit.component';

const routes: Routes = [{ path : '', component:PayementComponent, children:[
  {path:'add',component:AddPayementComponent},{path:'payCredit',component:PayCreditComponent}
  
]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayementRoutingModule { }
