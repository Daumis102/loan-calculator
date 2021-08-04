import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoanFormComponent } from './loan-form/loan-form.component';
import { TermPipe } from './pipes/term.pipe';

import { FormatedCurrencyPipe } from './pipes/formated-currency.pipe';
import { NumberDirective } from './directives/number.directive';
import { CurrencyDirective } from './directives/currency.directive';
import { AppErrorHandler } from './common/app-error-handler';


@NgModule({
  declarations: [
    AppComponent,
    LoanFormComponent,
    NumberDirective,
    CurrencyDirective,
    FormatedCurrencyPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    TermPipe,
    FormatedCurrencyPipe,
    { provide: ErrorHandler, useClass: AppErrorHandler },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
