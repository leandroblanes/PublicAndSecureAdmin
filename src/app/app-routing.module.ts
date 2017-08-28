import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PublicComponent } from './public/public.component';
import { SecureComponent } from './secure/secure.component';

import { public_routes } from './public/public_routes';
import { secure_routes } from './secure/secure_routes';

import { Guard } from './secure/guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: PublicComponent, children: public_routes },
  { path: 'admin', component: SecureComponent, canActivate: [Guard], children: secure_routes }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}