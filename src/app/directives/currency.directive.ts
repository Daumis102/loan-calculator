import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';
import { FormatedCurrencyPipe } from '../pipes/formated-currency.pipe';

@Directive({
  selector: '[loanCurrency]'
})
export class CurrencyDirective {

  constructor(private el: ElementRef, private control : NgControl, private formatedCurrencyPipe: FormatedCurrencyPipe) { }

  @HostListener('blur') onBlur() {
    this.el.nativeElement.value = this.formatedCurrencyPipe.transform(this.control.value);
  }
}
