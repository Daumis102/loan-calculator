
import { Pipe, PipeTransform } from '@angular/core';
import { ClearCurrencyFormattingPipe } from './clear-currency-formatting.pipe';


@Pipe({
  name: 'formatedCurrency'
})
export class FormatedCurrencyPipe implements PipeTransform{

  transform(value: string | number, ...args: unknown[]): string {
    if(typeof value === "number") 
      value = value.toString();
    const clearingPipe = new ClearCurrencyFormattingPipe();
    const cleared : string = clearingPipe.transform(value);
    const num : number = parseFloat(cleared);
    if(isNaN(num)){
      return "";
    } else {
      const rounded: string = num.toFixed(2).toString();
      const withSpaces: string = rounded.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      return withSpaces;
    }

  }

}
