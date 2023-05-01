import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditsRoutingModule } from './credits-routing.module';
import { SimulateCreditComponent } from './simulate-credit/simulate-credit.component';
import { FormsModule } from '@angular/forms';
import { CreditsComponent } from './credits.component';



@NgModule({
  declarations: [
    CreditsComponent,
    SimulateCreditComponent
  ],
  imports: [
    CommonModule,
    CreditsRoutingModule,
    FormsModule    
  ]
})
export class CreditsModule { }
