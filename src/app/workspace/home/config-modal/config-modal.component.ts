import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { Subscription } from 'rxjs';
import { CustomValidator } from 'src/app/shared/class/custom-validator';
import { FormService } from 'src/app/shared/services/form.service';

@Component({
  selector: 'app-config-modal',
  templateUrl: './config-modal.component.html',
  styleUrls: ['./config-modal.component.less']
})
export class ConfigModalComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  subscriptions: Subscription[] = [];
  constructor(
    private modalRef: NzModalRef,
    private fb: FormBuilder,
    private formService: FormService,
    private customValidator: CustomValidator,
  ) { 
    this.modalRef.updateConfig({
      nzTitle: 'Configurações de agendamento',
      nzOkText: 'Guardar',
    });
  }
  save() {}
  ngOnInit(): void {
    this.buildForm();
  }
  buildForm() {
    this.form = this.fb.group({
      scheduled_message: [null, [this.customValidator.blankFieldValidator("Insira a mensagem de agendamento")]],
      scheduled_time: [null, [this.customValidator.blankFieldValidator("Insira a hora de agendamento")]],
      delayed_message: [null, [this.customValidator.blankFieldValidator("Insira a mensagem de atraso")]],
      delayed_time: [null, [this.customValidator.blankFieldValidator("Insira a hora de atraso")]],
    })
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
