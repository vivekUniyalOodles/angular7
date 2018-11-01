import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  // { path: 'dashboard', component: DashboardComponent },

  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },

  { path: 'dashboard', component: DashboardComponent, 
    children: [
      {path: '', component: HomeComponent},       
      {path: 'contact', component: ContactComponent }, 
    ]
  },

  { path: '**', component: DashboardComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents =[LoginComponent, RegisterComponent, DashboardComponent, ContactComponent, HomeComponent,ForgotPasswordComponent]
