import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';
import { FormatedCurrencyPipe } from '../pipes/formated-currency.pipe';

@Directive({
  selector: '[formNumber]'
})
export class NumberDirective {

  constructor(private el: ElementRef, private control : NgControl, private formatedCurrencyPipe: FormatedCurrencyPipe) { }

  @HostListener('blur') onBlur() {
    //this.control.control?.setValue(this.formatedCurrencyPipe.transform(this.el.nativeElement.value));
    this.el.nativeElement.value = this.formatedCurrencyPipe.transform(this.control.value);
  }

  @HostListener('keypress', ['$event']) onKeypress(event : KeyboardEvent){

    const pattern = /[0-9]|\.|,/;
    const inputChar = event.key;
    if (!pattern.test(inputChar)) {    
        // invalid character, prevent input
        event.preventDefault();
    }
  }

}
