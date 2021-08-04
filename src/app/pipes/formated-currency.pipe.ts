
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'formatedCurrency'
})
export class FormatedCurrencyPipe implements PipeTransform{

  transform(value: any, ...args: unknown[]): unknown {
    let withoutSpaces = value.toString().replace(/\s/g, "");
    let num = parseFloat(withoutSpaces);
    if(isNaN(num)){
      return "";
    } else {
      let rounded = num.toFixed(2).toString();
      let withSpaces = rounded.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      return withSpaces;
    }

  }

}
