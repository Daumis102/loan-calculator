import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clearCurrencyFormatting'
})
export class ClearCurrencyFormattingPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): number {
    let parts: string[] = value.split(/[\.|,]/);
    let num: number = 0;
    if(parts[0]){
      num += parseFloat(parts[0].replace(' ', ''));
    }

    if(parts[1]){
      num += parseFloat(parts[1])/100;
    }

    return num;
  }

}
