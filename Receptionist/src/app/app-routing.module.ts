import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './layouts/admin/admin.component';
import {AuthComponent} from './layouts/auth/auth.component';
import { RouteGuard } from "../app/service/auth-guard.service";
import { PatientComponent } from '../app/patient/patient.component';
import { LiveupdateComponent } from '../app/liveupdate/liveupdate.component';
import { PatientLoginComponent } from '../app/patient-login/patient-login.component';
import { RegisterComponent } from '../app/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [RouteGuard],
    children: [
      {path: '', redirectTo: 'dashboard',pathMatch: 'full'},
      { path:'register', component:RegisterComponent, data: { breadcrumb: 'Register Patient' }},
      { path:'liveupdate', component:LiveupdateComponent, data: { breadcrumb: 'Live Update' }},
      { path:'patientlogin', component:PatientLoginComponent, data: { breadcrumb: 'Appointment ' }},
    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes , { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
