import { Injectable } from '@angular/core';
import { IHourLong } from '../types/time-type';

@Injectable({
  providedIn: 'root'
})

export class DateService {

  constructor() { }

  dateToServerDate(date: Date): string {
    return date.toISOString().split('T')[0];
  }
  dateToServerTime(date: Date): string {
    const timeWithSeconds = this.dateToServerTimeWithSeconds(date);
    return timeWithSeconds.split(':').slice(0, 2).join(':');
  }
  dateToServerTimeWithSeconds(date: Date): string {
    return date.toTimeString().split(' ')[0];
  }
  hourToHourLong(hour: string): IHourLong {
    const [hourString, minuteString] = hour.split(':');
    return {
      hour: parseInt(hourString),
      minute: parseInt(minuteString),
      second: 0
    }
  }
}
