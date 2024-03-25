import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status_to_color'
})
export class StatusToColorPipe implements PipeTransform {

  transform(status: string): string {
    if (status === 'PENDING') {
      return 'orange';
    }
    if (status === 'COMPLETED') {
      return 'green';
    }
    if (status === 'CANCELLED') {
      return 'red';
    }
    return '';
  }
}
