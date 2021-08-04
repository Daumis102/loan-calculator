import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoanFormComponent } from './loan-form/loan-form.component';
import { TermPipe } from './pipes/term.pipe';

import { registerLocaleData } from '@angular/common';
import localeLt from '@angular/common/locales/lt';
import { FormatedCurrencyPipe } from './pipes/formated-currency.pipe';
import { NumberDirective } from './directives/number.directive';
registerLocaleData(localeLt);

@NgModule({
  declarations: [
    AppComponent,
    LoanFormComponent,
    NumberDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    TermPipe,
    FormatedCurrencyPipe,
    { provide: LOCALE_ID, useValue: 'lt'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
