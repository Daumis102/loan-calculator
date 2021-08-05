import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clearCurrencyFormatting'
})
export class ClearCurrencyFormattingPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value.replace(/\s/g, "").replace(",", ".");
    
  }
}
