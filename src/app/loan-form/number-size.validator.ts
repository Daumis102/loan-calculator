import {AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class NumberSizeValidator {

    static maxValue(maxValue: number) : ValidatorFn {
        return (control: AbstractControl) : ValidationErrors | null => {
            return control.value > maxValue ?
                 {"maxValue": maxValue} : null;
        
        }
    }

    static minValue(minValue: number) : ValidatorFn {
        return (control: AbstractControl) : ValidationErrors | null => {
            return control.value > minValue ?
                 {"minValue": minValue} : null;
        
        }
    }
}