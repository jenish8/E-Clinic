import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ForgotPassComponent} from './forgotPass.component';

const routes: Routes = [
  {
    path: '',
    component: ForgotPassComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForgotPassRoutingModule { }
