import {Injectable} from '@angular/core';
import {FormArray, FormControl, FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() {
  }

  isFormValid(form: FormGroup): boolean {
    const valid = form.valid;

    Object.keys(form.controls).forEach(k => {
      const f = form.get(k);

      if (f instanceof FormControl) {
        f.markAsDirty();
        f.updateValueAndValidity();
      }

      if (f instanceof FormArray) {
        const controls = f.controls as FormControl[];
        Object.keys(controls).forEach((controlKey) => {
          // @ts-ignore
          const control = controls[controlKey] as FormGroup;
          Object.keys(control.controls).forEach(controlGroupKey => {
            const c = control.get(controlGroupKey);
            if(c){
              c.markAsDirty();
              c.updateValueAndValidity();
            }
          });
        });
      }

    });
    return valid;
  }
}
