import { DecimalPipe, formatNumber } from '@angular/common';
import { Inject, Pipe, PipeTransform } from '@angular/core';
import { LOCALE_ID } from '@angular/core';

@Pipe({
  name: 'formatedCurrency'
})
export class FormatedCurrencyPipe implements PipeTransform{
  
  constructor(@Inject (LOCALE_ID)  private locale: string){}

  transform(value: string, ...args: unknown[]): unknown {
    return parseFloat(value.replace(/\s/g, "")).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    // var parts = value.toString().replace(" ","").split(",");
    // parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    // return parts.join(",");

    //return formatNumber(value, this.locale ,"1.3-3");
  }

}
