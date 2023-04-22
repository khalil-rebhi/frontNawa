import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayementRoutingModule } from './payement-routing.module';
import { PayementComponent } from './payement.component';
import { AddPayementComponent } from './add-payement/add-payement.component';
import { FormsModule } from '@angular/forms';
import { PayCreditComponent } from './pay-credit/pay-credit.component';


@NgModule({
  declarations: [
    PayementComponent,
    AddPayementComponent,
    PayCreditComponent
  ],
  imports: [
    CommonModule,
    PayementRoutingModule,
    FormsModule
  ]
})
export class PayementModule { }
