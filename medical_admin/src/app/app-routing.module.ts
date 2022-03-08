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
import {MedorderComponent} from '../app/medorder/medorder.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [RouteGuard],
    children: [
      { path:'medicine', component:MedicineComponent, data: { breadcrumb: 'Medicine' }},
      { path:'brand', component:MedicineBrandComponent, data: { breadcrumb: 'Medicine Brand' }},
      { path:'order', component:MedorderComponent, data: { breadcrumb: 'Medicine Order' }},
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
