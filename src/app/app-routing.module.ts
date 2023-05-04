import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CanActivate } from '@angular/router';
import { ConnectivityGuard } from './core/service/connectivity.guard';


const routes: Routes = [
{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) , canActivate : [ConnectivityGuard]},
{ path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) },
{ path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
{ path: '', component: HomeComponent, pathMatch: 'full' },
{ path: '**', component: NotFoundComponent, pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
