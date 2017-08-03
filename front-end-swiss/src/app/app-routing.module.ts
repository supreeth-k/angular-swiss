import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterLink } from '@angular/router';

import { SignupComponent } from './authorization/signup/signup.component';
import { LoginComponent } from './authorization/login/login.component';
import { DefaultpageComponent } from './authorization/defaultpage/defaultpage.component';

const routes:Routes = [
   {path:'', component:DefaultpageComponent},
   {path:'signup', component:SignupComponent},
   {path:'signin', component:LoginComponent}
 ]


@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
