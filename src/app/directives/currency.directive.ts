import { Directive, ElementRef, HostListener } from '@angular/core';
import { FormatedCurrencyPipe } from '../pipes/formated-currency.pipe';

@Directive({
  selector: '[loanCurrency]'
})
export class CurrencyDirective {

  constructor(private el: ElementRef, private formatedCurrencyPipe: FormatedCurrencyPipe) { }

  @HostListener('blur') onBlur() {
    this.el.nativeElement.value = this.formatedCurrencyPipe.transform(this.el.nativeElement.value);
  }
}
