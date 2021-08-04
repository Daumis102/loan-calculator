import {AbstractControl, ValidationErrors } from '@angular/forms';
export class SelectorValidators {
    static mustBeSelected(control: AbstractControl) : ValidationErrors | null {
        if((control.value as string) === ''){
            return {mustBeSelected: true}
        }
        return null;
    }
}