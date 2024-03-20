import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAppointment } from 'src/app/shared/types/appointment-type';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  api = environment.api;
  patients = `${this.api}/patients`;
  doctors = `${this.api}/doctors`;
  appointments = `${this.api}/appointments`;

  constructor(
    private http: HttpClient
  ) { }

  getAppointmentsByDate(date: string): Observable<IAppointment[]> {
    return this.http.get<IAppointment[]>(`${this.appointments}/dated/${date}`)
  }
  getAppointmentsByRange(startDate: string, endDate: string): Observable<IAppointment[]> {
    return this.http.get<IAppointment[]>(`${this.appointments}/ranged/${startDate}/${endDate}`)
  }
}
