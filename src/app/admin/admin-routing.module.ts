import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
    { path:'', component:AdminComponent, children:[
    { path: 'bankAccount', loadChildren: () => import('../bank-account/bank-account.module').then(m => m.BankAccountModule) },
    { path: 'user', loadChildren: () => import('../user/user.module').then(m => m.UserModule) },
    { path: 'credits', loadChildren: () => import('../credits/credits.module').then(m => m.CreditsModule) },
    { path: 'forum', loadChildren: () => import('../forum/forum.module').then(m => m.ForumModule) },
    { path: 'offer', loadChildren: () => import('../offer/offer.module').then(m => m.OfferModule) },
    { path: 'payement', loadChildren: () => import('../payement/payement.module').then(m => m.PayementModule) },

  ]}, 
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
