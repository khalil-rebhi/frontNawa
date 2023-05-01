import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankAccountRoutingModule } from './bank-account-routing.module';
import { AddBankComponent } from './add-bank/add-bank.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AllbankComponent } from './allbank/allbank.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { BankService } from '../core/service/bank.service';


@NgModule({
  declarations: [
    AddBankComponent,
    AllbankComponent,
    MyaccountComponent
  ],
  imports: [
    CommonModule,
    BankAccountRoutingModule, HttpClientModule , FormsModule
  ],
  providers: [BankService]
})
export class BankAccountModule { }
