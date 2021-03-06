import {AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { ClearCurrencyFormattingPipe } from '../pipes/clear-currency-formatting.pipe';

export class NumberValidator{

    static maxValue(max: number) : ValidatorFn {
        return (control: AbstractControl) : ValidationErrors | null => {
            let pipe = new ClearCurrencyFormattingPipe();
            return parseFloat(pipe.transform(control.value)) > max ?
                 {maxValue: {"maxValue" : max}} : null;
        
        }
    }

    static minValue(min: number) : ValidatorFn {
        return (control: AbstractControl) : ValidationErrors | null => {
            let pipe = new ClearCurrencyFormattingPipe();
            return parseFloat(pipe.transform(control.value)) < min ?
                 {minValue: {"minValue" : min}} : null;
        
        }
    }

    static isNumber(control: AbstractControl) : ValidationErrors | null {
        if(/^(\d|\s)+((,|\.)[0-9]{2})?$/.test(control.value)){
            return null;
        }
        return {isNumber: true};
    } 

}