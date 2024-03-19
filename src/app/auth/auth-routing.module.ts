import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ROUTE} from "../shared/constants/routes-constants";
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";

const routes: Routes = [
  { path: '', redirectTo: ROUTE.LOGIN, pathMatch: 'full' },
  { path: ROUTE.LOGIN, component: LoginComponent },
  { path: ROUTE.SIGNUP, component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
