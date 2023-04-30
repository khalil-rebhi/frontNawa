import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfferComponent } from './offer.component';
import { ListOfferComponent } from './list-offer/list-offer.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { OfferRequestComponent } from './offer-request/offer-request.component';
import { ListOfferAdminComponent } from './list-offer-admin/list-offer-admin.component';
import { DetailsComponent } from './details/details.component';
import { FormAdminComponent } from './form-admin/form-admin.component';
import { EditFormComponent } from './edit-form/edit-form.component';

const routes: Routes = [{ path : '', component:OfferComponent, children:[
  {path:"",component:ListOfferAdminComponent},
  {path:"offers",component:ListOfferComponent},
  {path:"detail/:id",component:DetailsComponent},
  {path:"offers/request",component:OfferRequestComponent},
  {path: "new", component:FormAdminComponent},
  {path: "edit/:id", component:EditFormComponent},
  {path:"**",component:NotFoundComponent}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfferRoutingModule { }
