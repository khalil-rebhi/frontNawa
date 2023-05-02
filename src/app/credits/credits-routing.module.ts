import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditsComponent } from './credits.component';
import { SimulateCreditComponent } from './simulate-credit/simulate-credit.component';
import { ListCreditComponent } from './list-credit/list-credit.component';
import { DetailCreditComponent } from './detail-credit/detail-credit.component';

const routes: Routes = [{ path : '', component:CreditsComponent, children:[
    {path:'',component:ListCreditComponent},
    {path:'simulate',component:SimulateCreditComponent},
    {path: 'details/:id', component:DetailCreditComponent}
  
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditsRoutingModule { }
