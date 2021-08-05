import {AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class NumberValidator{

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

    static isNumber(control: AbstractControl) : ValidationErrors | null {
        console.log(/^(\d|\s)+((,|\.)[0-9]{2})?$/.test("11111111.11"))
        if(/^(\d|\s)+((,|\.)[0-9]{2})?$/.test(control.value)){
            return null;
        }
        return {isNumber: true};
    } 

}