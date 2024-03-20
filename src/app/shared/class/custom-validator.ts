import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export class CustomValidator {

  regexValidator(pattern: RegExp, errorMessage = 'Invalid value for this field'): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!pattern.test(control.value)) {
        return this.errorMessageFormat(errorMessage)
      }
      return null;
    }
  }
  blankFieldValidator( errorMessage = 'This field should not be empty'): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if(!control.value || !control.value.trim().length){
        return this.errorMessageFormat(errorMessage)
      }
      return null;
    }
  }
  blankDateValidator( errorMessage = 'This field should not be empty'): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if(!control.value){
        return this.errorMessageFormat(errorMessage)
      }
      return null;
    }
  }
  errorMessageFormat(message: string): { message: string } {
    return {message}
  }
}
