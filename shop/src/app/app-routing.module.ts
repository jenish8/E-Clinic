import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShopeComponent } from './shope/shope.component';
import { ApoComponent } from './apo/apo.component';
import {ApfComponent} from './apo/apf/apf.component';
import { CaerComponent } from './caer/caer.component';
import { PorComponent } from './por/por.component';
import { OrderComponent } from './order/order.component';
import { AccountComponent } from './account/account.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { NewpassComponent } from './newpass/newpass.component';
import { OtpcheckComponent } from './otpcheck/otpcheck.component';
import { NoresultComponent } from './noresult/noresult.component';
import { AddressComponent } from './address/address.component';
import { NewaddComponent } from './newadd/newadd.component';
const routes: Routes = [
  {path: '', component: LoginComponent,},
  {path: 'registeruser', component: RegisterComponent},
  {path: 'shopeing', component: ShopeComponent},
  {path: 'appoiment', component: ApoComponent},
  {path: 'tappoiment', component: ApfComponent},
  {path: 'ch', component: CaerComponent},
  {path: 'order', component: PorComponent},
  {path: 'yourorder', component: OrderComponent},
  {path: 'account', component: AccountComponent},
  {path: 'changepass', component:ChangePasswordComponent},
  {path: 'forgotpass', component:ForgotpassComponent},
  {path: 'newpass', component:NewpassComponent},
  {path: 'otpcheck', component:OtpcheckComponent},
  {path: 'noresult', component:NoresultComponent},
  {path: 'address', component:AddressComponent},
  {path: 'newadd', component:NewaddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
