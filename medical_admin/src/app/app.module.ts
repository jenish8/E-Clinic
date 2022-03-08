import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule , ExcelModule } from '@progress/kendo-angular-grid';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { TitleComponent } from './layouts/admin/title/title.component';
import { BreadcrumbsComponent } from './layouts/admin/breadcrumbs/breadcrumbs.component';
import { AuthComponent } from './layouts/auth/auth.component';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// Angular goggle map
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { ProfileComponent } from './my_profile/profile/profile.component';
import { ChangePasswordComponent } from './my_profile/change-password/change-password.component';
import { UsersComponent } from './admin_work/users/users.component';
import { CustomersComponent } from './admin_work/customers/customers.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { HttpClientModule } from '@angular/common/http';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DatePipe } from '@angular/common';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { OrgChartModule } from 'angular-org-chart';
import { ProductComponent } from './admin_work/product/product.component';
import { PopupModule } from '@progress/kendo-angular-popup';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { AdminMasterComponent } from './admin_work/admin-master/admin-master.component';
import { AdminMyteamComponent } from './admin_work/admin-myteam/admin-myteam.component';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { ZingchartAngularModule } from 'zingchart-angular'; 
import { GaugesModule } from '@progress/kendo-angular-gauges';
import { RegisterComponent } from './register/register.component';
import { ClinicComponent } from './clinic/clinic.component';
import { PatientComponent } from './patient/patient.component';
import { MedicineComponent } from './medicine/medicine.component';
import { MedicineBrandComponent } from './medicine-brand/medicine-brand.component';
import { PatientLoginComponent } from './patient-login/patient-login.component';
import { MedorderComponent } from './medorder/medorder.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    TitleComponent,
    BreadcrumbsComponent,
    AuthComponent,
    ProfileComponent,
    ChangePasswordComponent,
    UsersComponent,
    CustomersComponent,
    ProductComponent,
    AdminMasterComponent,
    AdminMyteamComponent,
    RegisterComponent,
    ClinicComponent,
    PatientComponent,
    MedicineComponent,
    MedicineBrandComponent,
    PatientLoginComponent,
    MedorderComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ExcelModule ,
    SharedModule,
    HttpClientModule,
    OrgChartModule,
    FormsModule,
    GridModule,
    InputsModule,
    DropDownsModule,
    TreeViewModule,
    PopupModule,
    GaugesModule,
    ChartsModule,
    ZingchartAngularModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    DateInputsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD3KFXnK3IJcS1mbblaMpwYbV1ahZHy1zg',
    }),
    AgmDirectionModule, 
     // Specify ng-circle-progress as an import
     NgCircleProgressModule.forRoot({}),
     ConfirmationPopoverModule.forRoot({confirmButtonType:'danger'})
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule { }
