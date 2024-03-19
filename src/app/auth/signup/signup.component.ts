import {Component} from '@angular/core';
import {ROUTE} from "../../shared/constants/routes-constants";
import {APP} from "../../shared/constants/app.constants";
import {FormBuilder, FormGroup} from "@angular/forms";
import {FormService} from "../../shared/services/form.service";
import {CustomValidator} from "../../shared/class/custom-validator";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less', '../shared/styles/auth.styles.less']
})
export class SignupComponent {
  ROUTE = ROUTE;
  APP = APP;
  form!: FormGroup;
  loading = false;
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
      name: [null, [
        this.customValidator.blankFieldValidator("Insira o seu nome")
      ]],
      phone: [null, [
        this.customValidator.regexValidator(/^(82|83|84|85|86|87)\d{7}$/, "Insira um numéro de celular Moçambicano válido")]],
      location: [null, [
        this.customValidator.blankFieldValidator("Insira o seu bairro")
      ]],
      document: [null]
    });
  }

  signup() {

    if(this.formService.isFormValid(this.form)){
      this.loading = true;
    }
  }
}
