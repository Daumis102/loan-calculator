import { Directive, HostListener } from '@angular/core';


@Directive({
  selector: '[loanNumber]'
})
export class NumberDirective {

  @HostListener('keypress', ['$event']) onKeypress(event : KeyboardEvent){

    const pattern = /[0-9]|\.|,/;
    const inputChar = event.key;
    if (!pattern.test(inputChar)) {    
        // invalid character, prevent input
        event.preventDefault();
    }
  }

}
