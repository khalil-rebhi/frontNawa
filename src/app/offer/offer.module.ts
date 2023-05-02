import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfferRoutingModule } from './offer-routing.module';
import { OfferComponent } from './offer.component';
import { ListOfferComponent } from './list-offer/list-offer.component';
import { OfferRequestComponent } from './offer-request/offer-request.component';
import { FormsModule } from '@angular/forms';
import { ListOfferAdminComponent } from './list-offer-admin/list-offer-admin.component';
import { DetailsComponent } from './details/details.component';
import { FormAdminComponent } from './form-admin/form-admin.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { ConfirmRequestComponent } from './confirm-request/confirm-request.component';
import { AcceptOfferAdminComponent } from './accept-offer-admin/accept-offer-admin.component';



@NgModule({
  declarations: [
    OfferComponent,
    ListOfferComponent,
    OfferRequestComponent,
    ListOfferAdminComponent,
    DetailsComponent,
    FormAdminComponent,
    EditFormComponent,
    ConfirmRequestComponent,
    AcceptOfferAdminComponent
    ],
  imports: [
    CommonModule,
    OfferRoutingModule,
    FormsModule
    ]
})
export class OfferModule { }
