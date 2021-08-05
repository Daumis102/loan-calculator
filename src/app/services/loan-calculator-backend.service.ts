import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/operators';
import { environment } from "../../environments/environment";
import { AppError } from './../common/app-error';
import { NotFoundError } from './../common/not-found-error';
import { BadInputError } from './../common/bad-input-error';


@Injectable({
  providedIn: 'root'
})
export class LoanCalculatorBackend {

  private apiUrl = '/loanCalculatorApi';
  constructor(private http: HttpClient) { }

  calculateLoan(loanData : object) {
    let apiKey = environment.apiKey;
    const headers = new HttpHeaders({
      'Content-type': 'application/json',
      "X-API-KEY" : apiKey,
    });
    
    return this.http.post(this.apiUrl, JSON.stringify(loanData), {"headers":headers})
      .pipe(catchError(this.errorHandler));
  }


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

  private errorHandler(error: HttpErrorResponse) {
    if (error.status === 404)
      return throwError(new NotFoundError());

    if (error.status === 400)
      return throwError(new BadInputError(error));
    return throwError(new AppError(error));
  }
}
