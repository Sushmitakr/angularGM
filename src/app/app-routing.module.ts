import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
 
    { path: 'login', component: LoginComponent } ,
    { path: 'add', component: RegistrationComponent } ,
    
    {path: '', redirectTo: 'add', pathMatch: 'full'},
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  export const routingComponents = [LoginComponent,
                                    RegistrationComponent]