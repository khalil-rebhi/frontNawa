import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankAccountRoutingModule } from './bank-account-routing.module';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { MyaccountComponent } from './myaccount/myaccount.component';
import { BankService } from '../core/service/bank.service';
import { MessageService } from 'primeng/api';
import { CaptchaModule } from 'primeng/captcha';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';


import { AllbankComponent } from './allbank/allbank.component';
import { AddBankComponent } from './add-bank/add-bank.component';

@NgModule({
  declarations: [
    AddBankComponent,
    AllbankComponent,
    MyaccountComponent
  ],
  imports: [
    CommonModule,
    BankAccountRoutingModule, HttpClientModule , FormsModule,DropdownModule,CaptchaModule,ToastModule
  ],
  providers: [BankService,MessageService]
})
export class BankAccountModule { }
