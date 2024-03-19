import {Component, OnDestroy, OnInit} from '@angular/core';
import {ROUTE} from "../../shared/constants/routes-constants";
import {APP} from "../../shared/constants/app.constants";
import {FormBuilder, FormGroup} from "@angular/forms";
import {FormService} from "../../shared/services/form.service";
import {CustomValidator} from "../../shared/class/custom-validator";
import { AuthService } from '../shared/services/auth.service';
import { Subscription } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less', '../shared/styles/auth.styles.less']
})
export class LoginComponent implements OnInit, OnDestroy {
  ROUTE = ROUTE;
  loading = false;
  APP = APP;
  form!: FormGroup;
  passwordVisible = false;
  subscriptions: Subscription[] = [];

  constructor(
    private fb: FormBuilder,
    private formService: FormService,
    private customValidator: CustomValidator,
    private authService: AuthService,
    private messageService: NzMessageService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.buildForm();
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
  buildForm() {
    this.form = this.fb.group({
      username: [null, [this.customValidator.blankFieldValidator("Insira o seu nome de utilizador")]],
      password: [null, [this.customValidator.blankFieldValidator("Insira a sua palavra-passe")]]
    });
  }

  login() {
    if(this.formService.isFormValid(this.form)) {
      this.loading = true;
      this.subscriptions.push(
        this.authService.login(this.form.value.username, this.form.value.password).subscribe({
          next: (user) => {
            this.loading = false;
            this.router.navigate([ROUTE.APP]);
          },
          error: (err) => {
            this.loading = false;
            this.messageService.error(err.error)
          }
        })
      )
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
