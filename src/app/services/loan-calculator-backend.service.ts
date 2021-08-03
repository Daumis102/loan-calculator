import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoanCalculatorBackend {

  constructor() { }

  getCoapplicantOptions(){
    // We could use a hardcoded ENUM here, but in my mind,
    // this information should be obtained from the backend,
    // which would allow easy update of available options.

    enum coapplicantOptions{
      NONE = "None",
      SINGLE_BORROWER = "Single borrower",
      MULTIPLE_BORROWERS = "Multiple borrowers"
    }

    return coapplicantOptions;
  }

  getChildrenOptions(){
    // We could use a hardcoded ENUM here, but in my mind,
    // this information should be obtained from the backend,
    // which would allow easy update of available options.
    enum childrenOptions{
      NONE = "None",
      SINGLE = "Single Child",
      MULTIPLE = "Multiple children"
    }

    return childrenOptions;
  }
}
