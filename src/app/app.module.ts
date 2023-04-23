import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BankAccountComponent } from './bank-account/bank-account.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PayementService } from './core/service/payement.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NotifierModule } from 'angular-notifier';


@NgModule({
  declarations: [
    AppComponent,
    BankAccountComponent,
    HomeComponent,
    NotFoundComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    NotifierModule
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
