import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule, RouterLink } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './authorization/login/login.component';
import { SignupComponent } from './authorization/signup/signup.component';
import { AuthorizationService } from './authorization/authorization.service';
import { AppRoutingModule } from './app-routing.module';
import { TournamentComponent } from './tournament/tournament.component';
import { HomeComponent } from './tournament/home/home.component';
import { DefaultpageComponent } from './authorization/defaultpage/defaultpage.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    TournamentComponent,
    HomeComponent,
    DefaultpageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthorizationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
