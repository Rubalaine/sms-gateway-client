import {Component, OnDestroy, OnInit} from '@angular/core';
import {ROUTE} from "../../../shared/constants/routes-constants";
import {APP} from "../../../shared/constants/app.constants";
import { Subscription } from 'rxjs';
import { HomeService } from '../shared/services/home.service';
import { DateService } from 'src/app/shared/services/date.service';
import { IAppointment } from 'src/app/shared/types/appointment-type';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnDestroy, OnInit {
  ROUTES = ROUTE;
  APP = APP;
  subscriptions: Subscription[] = [];
  appointments: IAppointment[] = [];
  loading = false;
  appointmentsConfig = [
    { title: 'Para hoje', onclick: () => this.onSelectToday() },
    { title: 'Para amanhã', onclick: () => this.onSelectTomorrow() },
    { title: 'Proximos 7 dias', onclick: () => this.onSelectWeek() }
  ]
  constructor(
    private homeService: HomeService,
    private dateService: DateService
  ) {
  }

  ngOnInit(): void {
    this.onSelectToday();
  }

  loadAppointments(date: string) {
    this.loading = true;
    this.subscriptions.push(
      this.homeService.getAppointmentsByDate(date).subscribe({
        next: (appointments) => {
          this.appointments = appointments;
          this.loading = false;
        },
        error: (error) => {
          console.error(error);
          this.loading = false;
        }
      })
    );
  }
  loadAppointmentsByRange(startDate: string, endDate: string) {
    this.loading = true;
    this.subscriptions.push(
      this.homeService.getAppointmentsByRange(startDate, endDate).subscribe({
        next: (appointments) => {
          this.appointments = appointments;
          this.loading = false;
        },
        error: (error) => {
          console.error(error);
          this.loading = false;
        }
      })
    );
  }
  onSelectToday() {
    const date = new Date()
    date.setDate(date.getDate() + 1);
    this.loadAppointments(this.dateService.dateToServerDate(date));
  }
  onSelectTomorrow() {
    const date = new Date()
    date.setDate(date.getDate() + 2);
    this.loadAppointments(this.dateService.dateToServerDate(date));
  }
  onSelectWeek() {
    const startDate = new Date();
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 9);
    startDate.setDate(startDate.getDate() + 2);
    this.loadAppointmentsByRange(this.dateService.dateToServerDate(startDate), this.dateService.dateToServerDate(endDate));
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
