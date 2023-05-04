import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditsRoutingModule } from './credits-routing.module';
import { SimulateCreditComponent } from './simulate-credit/simulate-credit.component';
import { FormsModule } from '@angular/forms';
import { CreditsComponent } from './credits.component';
import { ListCreditComponent } from './list-credit/list-credit.component';
import { DetailCreditComponent } from './detail-credit/detail-credit.component';
import { PayementsByCreditComponent } from './payements-by-credit/payements-by-credit.component';




@NgModule({
  declarations: [
    CreditsComponent,
    SimulateCreditComponent,
    ListCreditComponent,
    DetailCreditComponent,
    PayementsByCreditComponent
  ],
  imports: [
    CommonModule,
    CreditsRoutingModule,
    FormsModule    
  ]
})
export class CreditsModule { }
