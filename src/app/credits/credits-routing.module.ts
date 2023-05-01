import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditsComponent } from './credits.component';
import { SimulateCreditComponent } from './simulate-credit/simulate-credit.component';

const routes: Routes = [{ path : '', component:CreditsComponent, children:[
   {path:'simulate',component:SimulateCreditComponent}
  
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditsRoutingModule { }
