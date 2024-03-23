import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { Subscription } from 'rxjs';
import { CustomValidator } from 'src/app/shared/class/custom-validator';
import { FormService } from 'src/app/shared/services/form.service';
import { HomeService } from '../shared/services/home.service';
import { IConfig } from 'src/app/shared/types/config-type';
import { DateService } from 'src/app/shared/services/date.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-config-modal',
  templateUrl: './config-modal.component.html',
  styleUrls: ['./config-modal.component.less']
})
export class ConfigModalComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  subscriptions: Subscription[] = [];
  loading = false;
  saving = false;
  defaultConfig!: IConfig;

  constructor(
    private modalRef: NzModalRef,
    private fb: FormBuilder,
    private formService: FormService,
    private customValidator: CustomValidator,
    private homeService: HomeService,
    private dateService: DateService,
    private messageService: NzMessageService
  ) { 
    this.modalRef.updateConfig({
      nzTitle: 'Configurações de agendamento',
    });
  }

  close() {
    this.modalRef.destroy();
  }
  ngOnInit(): void {
    this.buildForm();
    this.loadConfig();
  }
  loadConfig() {
    this.loading = true;
    this.subscriptions.push(
      this.homeService.getConfig().subscribe({
        next: (config) => {
          this.defaultConfig = config;
          if(this.defaultConfig.scheduled_time) {
            const _hour = this.dateService.hourToHourLong(config.scheduled_time as string);
            this.defaultConfig.scheduled_time = new Date(0, 0, 0, _hour.hour, _hour.minute, _hour.second);
          }
          if(this.defaultConfig.delayed_time) {
            const _hour = this.dateService.hourToHourLong(config.delayed_time as string);
            this.defaultConfig.delayed_time = new Date(0, 0, 0, _hour.hour, _hour.minute, _hour.second);
          }	
          this.form.patchValue(config);
          this.loading = false;
        },
        error: (err) => {
          console.error(err);
          this.loading = false;
        }
      })
    )
  }
  buildForm() {
    this.form = this.fb.group({
      scheduled_message: [null, [this.customValidator.blankFieldValidator("Insira a mensagem de agendamento")]],
      scheduled_time: [null, [this.customValidator.blankDateValidator("Insira a hora de agendamento")]],
      delayed_message: [null, [this.customValidator.blankFieldValidator("Insira a mensagem de atraso")]],
      delayed_time: [null, [this.customValidator.blankDateValidator("Insira a hora de atraso")]],
    })
  }
  save(){
    if(this.formService.isFormValid(this.form)){
      this.saving = true;
      const config = this.form.value;
      config.scheduled_time = this.dateService.dateToServerTime(config.scheduled_time);
      config.delayed_time = this.dateService.dateToServerTime(config.delayed_time);
      this.subscriptions.push(
        this.homeService.updateConfig(config).subscribe({
          next: () => {
            this.saving = false;
            this.messageService.create('success', 'Configurações actualizadas com sucesso');
            this.close();
          },
          error: (err) => {
            console.error(err);
            this.saving = false;
          }
        })
      )
    }
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
