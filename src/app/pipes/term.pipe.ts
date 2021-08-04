import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'termin'
})
export class TermPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
