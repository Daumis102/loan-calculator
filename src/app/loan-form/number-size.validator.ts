import {AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class NumberSizeValidator {

    static maxValue(max: number) : ValidatorFn {
        return (control: AbstractControl) : ValidationErrors | null => {
            return control.value > max ?
                 {maxValue: {"maxValue" : max}} : null;
        
        }
    }

    static minValue(min: number) : ValidatorFn {
        return (control: AbstractControl) : ValidationErrors | null => {
            return control.value < min ?
                 {minValue: {"minValue" : min}} : null;
        
        }
    }
}