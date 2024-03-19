import {Component, OnInit} from '@angular/core';
import {ROUTE} from "../../shared/constants/routes-constants";
import {APP} from "../../shared/constants/app.constants";
import {FormBuilder, FormGroup} from "@angular/forms";
import {FormService} from "../../shared/services/form.service";
import {CustomValidator} from "../../shared/class/custom-validator";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less', '../shared/styles/auth.styles.less']
})
export class LoginComponent implements OnInit {
  ROUTE = ROUTE;
  loading = false;
  APP = APP;
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private formService: FormService,
    private customValidator: CustomValidator
  ) {
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
      phone: [null, [
        this.customValidator.regexValidator(/^(82|83|84|85|86|87)\d{7}$/, "Insira um numéro de celular Moçambicano válido")]],
    });
  }

  login() {
    if (this.formService.isFormValid(this.form)) {
      this.loading = true;
    }
  }
}
