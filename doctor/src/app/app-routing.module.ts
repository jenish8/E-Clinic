import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './layouts/admin/admin.component';
import {AuthComponent} from './layouts/auth/auth.component';
import {ProfileComponent} from './my_profile/profile/profile.component';
import {ChangePasswordComponent} from './my_profile/change-password/change-password.component';
import {UsersComponent} from './admin_work/users/users.component';
import {CustomersComponent} from './admin_work/customers/customers.component';
import { RouteGuard } from "../app/service/auth-guard.service";
import { ProductComponent } from './admin_work/product/product.component';
import { AdminMasterComponent } from './admin_work/admin-master/admin-master.component';
import { AdminMyteamComponent } from './admin_work/admin-myteam/admin-myteam.component';
import { RegisterComponent } from '../app/register/register.component';
import { ClinicComponent } from '../app/clinic/clinic.component';
import { PatientComponent } from '../app/patient/patient.component';
import { MedicineComponent } from '../app/medicine/medicine.component';
import { MedicineBrandComponent } from '../app/medicine-brand/medicine-brand.component';
import { PatientLoginComponent } from '../app/patient-login/patient-login.component';
import { AptimeComponent } from '../app/aptime/aptime.component'

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [RouteGuard],
    children: [
      {path: '', redirectTo: 'dashboard',pathMatch: 'full'},
      { path: 'dashboard', loadChildren: () => import('./admin_work/dashboard/dashboard.module').then(m => m.DashboardModule)},
      { path:'register', component:RegisterComponent, data: { breadcrumb: 'User Register' }},
      { path:'patient', component:PatientComponent, data: { breadcrumb: 'Patient' }},
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
