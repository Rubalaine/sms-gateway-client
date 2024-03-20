import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  dateToServerDate(date: Date): string {
    return date.toISOString().split('T')[0];
  }
}
