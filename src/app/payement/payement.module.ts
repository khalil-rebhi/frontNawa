import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayementRoutingModule } from './payement-routing.module';
import { PayementComponent } from './payement.component';
import { AddPayementComponent } from './add-payement/add-payement.component';
import { FormsModule } from '@angular/forms';
import { PayCreditComponent } from './pay-credit/pay-credit.component';
import { NotifierModule } from 'angular-notifier';
import { ListPayementComponent } from './list-payement/list-payement.component';


@NgModule({
  declarations: [
    PayementComponent,
    AddPayementComponent,
    PayCreditComponent,
    ListPayementComponent
  ],
  imports: [
    CommonModule,
    PayementRoutingModule,
    FormsModule,
    NotifierModule
  ]
})
export class PayementModule { }
