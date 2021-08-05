import { FormatedCurrencyPipe } from './../pipes/formated-currency.pipe';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NumberDirective } from './../directives/number.directive';
import { CurrencyDirective } from './../directives/currency.directive';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DebugElement, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanFormComponent } from './loan-form.component';

describe('LoanFormComponent', () => {
  let component: LoanFormComponent;
  let fixture: ComponentFixture<LoanFormComponent>;

  let form: FormGroup;
  let monthlyIncomeInput: AbstractControl | null;
  let requestedAmountInput: AbstractControl | null;
  let loanTermInput: AbstractControl | null;
  let childrenInput: AbstractControl | null;
  let coapplicantInput: AbstractControl | null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanFormComponent, CurrencyDirective, NumberDirective ],
      imports: [ ReactiveFormsModule, HttpClientModule ],
      providers: [ FormatedCurrencyPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanFormComponent); // is a convenient way to access the component and the rendered DOM
    component = fixture.componentInstance;
    fixture.detectChanges();

    form = component.loanForm;
    monthlyIncomeInput = form.get("monthlyIncome");
    requestedAmountInput = form.get("requestedAmount");
    loanTermInput = form.get("loanTerm");
    childrenInput = form.get("children");
    coapplicantInput = form.get("coapplicant");
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a form with 5 inputs', () => {
    expect(component.loanForm.contains('monthlyIncome')).toBeTruthy();
    expect(component.loanForm.contains('requestedAmount')).toBeTruthy();
    expect(component.loanForm.contains('loanTerm')).toBeTruthy();
    expect(component.loanForm.contains('children')).toBeTruthy();
    expect(component.loanForm.contains('coapplicant')).toBeTruthy();
  });

  it('should make all inputs required', () => {
    monthlyIncomeInput?.setValue("");
    expect(monthlyIncomeInput?.valid).toBeFalsy();

    requestedAmountInput?.setValue("");
    expect(requestedAmountInput?.valid).toBeFalsy();

    loanTermInput?.setValue("");
    expect(loanTermInput?.valid).toBeFalsy();

    childrenInput?.setValue("");
    expect(childrenInput?.valid).toBeFalsy();

    coapplicantInput?.setValue("");
    expect(coapplicantInput?.valid).toBeFalsy();
  });

  it('form should be valid after filling in all good values', () => {
    expect(form.valid).toBeFalsy();

    monthlyIncomeInput?.setValue("1000000");
    expect(form.valid).toBeFalsy();

    requestedAmountInput?.setValue("30000000");
    expect(form.valid).toBeFalsy();

    loanTermInput?.setValue("40");
    expect(form.valid).toBeFalsy();

    childrenInput?.setValue("NONE");
    expect(form.valid).toBeFalsy();

    coapplicantInput?.setValue("NONE");
    expect(form.valid).toBeTruthy();

  });

  it('submit button should be dissabled  when form invalid', () => {
    const btn = fixture.debugElement.nativeElement.querySelector('button')
    expect(btn.disabled).toBeTruthy();
    // expect(form.valid).toBeFalsy();

    // monthlyIncomeInput?.setValue("1000000");
    // expect(form.valid).toBeFalsy();

    // requestedAmountInput?.setValue("30000000");
    // expect(form.valid).toBeFalsy();

    // loanTermInput?.setValue("40");
    // expect(form.valid).toBeFalsy();

    // childrenInput?.setValue("NONE");
    // expect(form.valid).toBeFalsy();

    // coapplicantInput?.setValue("NONE");
    // expect(form.valid).toBeTruthy();;

  });

  it('submit button should not be disabled when form valid', () => {
    const btn = fixture.debugElement.nativeElement.querySelector('button')
    expect(btn.disabled).toBeTruthy();

    monthlyIncomeInput?.setValue("1000000");
    requestedAmountInput?.setValue("30000000");
    loanTermInput?.setValue("40");
    childrenInput?.setValue("NONE");
    coapplicantInput?.setValue("NONE");
    fixture.detectChanges();
    expect(btn.disabled).toBeFalsy();

  });

  it('should show alert when requestedAmount invalid', () => {
    requestedAmountInput?.setValue("0");
    requestedAmountInput?.markAsTouched();
    fixture.detectChanges();
    const alert = fixture.debugElement.nativeElement.querySelector('.alert');
    expect(alert).toBeTruthy();
  });

});
