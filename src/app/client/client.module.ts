import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';


@NgModule({
  declarations: [
    ClientComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
    
  ]
})
export class ClientModule { }
