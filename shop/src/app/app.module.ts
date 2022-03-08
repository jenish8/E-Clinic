import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShopeComponent } from './shope/shope.component';
import { HeaderComponent } from './header/header.component';
import { FotterComponent } from './fotter/fotter.component';
import { ApoComponent } from './apo/apo.component';
import { ServiceComponent } from './service/service.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApfComponent } from './apo/apf/apf.component';
import { CaerComponent } from './caer/caer.component';
import { ToastrModule } from 'ngx-toastr';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DatePipe} from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ShopeComponent,
    HeaderComponent,
    FotterComponent,
    ApoComponent,
    ServiceComponent,
    ApfComponent,
    CaerComponent,
    PorComponent,
    OrderComponent,
    AccountComponent,
    ChangePasswordComponent,
    ForgotpassComponent,
    NewpassComponent,
    OtpcheckComponent,
    NoresultComponent,
    AddressComponent,
    NewaddComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ToastrModule.forRoot(), 
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    DatePipe

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
