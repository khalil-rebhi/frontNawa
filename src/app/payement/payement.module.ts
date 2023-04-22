import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayementRoutingModule } from './payement-routing.module';
import { PayementComponent } from './payement.component';
import { AddPayementComponent } from './add-payement/add-payement.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PayementComponent,
    AddPayementComponent
  ],
  imports: [
    CommonModule,
    PayementRoutingModule,
    FormsModule
  ]
})
export class PayementModule { }
