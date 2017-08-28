import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';

import { SecureComponent } from './secure/secure.component';
import { LoginComponent } from './secure/login.component';
import { DashboardComponent } from './secure/dashboard.component';

import { PublicComponent } from './public/public.component';
import { HomeComponent } from './public/home.component';

import { AppRoutingModule } from './app-routing.module';

import { Guard } from './secure/guard';

import { UserService } from './services/user.service';

@NgModule({
  imports:      [ 
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [ 
    AppComponent,
    PublicComponent,
    HomeComponent,
    SecureComponent,
    DashboardComponent,
    LoginComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [ 
    Guard,
    UserService
  ]
})
export class AppModule { }
