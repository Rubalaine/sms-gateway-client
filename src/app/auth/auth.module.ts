import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {NzCardModule} from "ng-zorro-antd/card";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzTypographyModule} from "ng-zorro-antd/typography";
import {OtpComponent} from './otp/otp.component';
import {NzInputNumberModule} from "ng-zorro-antd/input-number";
import {ReactiveFormsModule} from "@angular/forms";
import {CustomValidator} from "../shared/class/custom-validator";
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMessageModule } from 'ng-zorro-antd/message';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    OtpComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NzCardModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzTypographyModule,
    NzInputNumberModule,
    ReactiveFormsModule,
    NzIconModule,
    NzMessageModule
  ],
  providers: [CustomValidator]
})
export class AuthModule {
}
