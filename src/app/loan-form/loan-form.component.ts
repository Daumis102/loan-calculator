import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoanCalculatorBackend } from '../services/loan-calculator-backend.service';
import { NumberValidator } from './number.validator';
import { AppError } from '../common/app-error';
import { BadInputError } from '../common/bad-input-error';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'loan-form',
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.css']
})
export class LoanFormComponent implements OnInit {


  loanForm: FormGroup;
  coapplicantOptions: any;
  childrenOptions: any;

  constructor(private backend : LoanCalculatorBackend, fb : FormBuilder) {
    this.loanForm = fb.group({
      monthlyIncome:['', [Validators.required, NumberValidator.minValue(500000), NumberValidator.isNumber]],
      requestedAmount:['', [Validators.required, NumberValidator.minValue(20000000), NumberValidator.isNumber]],
      loanTerm:['', [Validators.required, NumberValidator.minValue(36), NumberValidator.maxValue(360), NumberValidator.isNumber]],
      children:['', Validators.required],
      coapplicant:['',  Validators.required],
    })
  }
  
  ngOnInit(): void {
    this.coapplicantOptions = this.backend.getCoapplicantOptions();
    this.childrenOptions = this.backend.getChildrenOptions();
  }

  submit(): void{
    if(this.loanForm.valid){
      // Convert fields to number
      this.backend.calculateLoan(this.loanForm.value).subscribe(
        response => {
          alert("Success! Spend your loan well :)");
        },
        (error: AppError) => {
          if (error instanceof BadInputError) {
            error.badInputs.forEach((badInput: BadInput) => {
              this.loanForm.get(badInput.params)?.setErrors({"serverError" : {"message": badInput.message}});
            });
          } else throw error; 
        }
      );
    }
  }

  get monthlyIncome(): FormControl{
    return this.loanForm.get('monthlyIncome') as FormControl;
  }

  get requestedAmount(): FormControl{
    return this.loanForm.get('requestedAmount') as FormControl;
  }

  get loanTerm(): FormControl{
    return this.loanForm.get('loanTerm') as FormControl;
  }

  get children(): FormControl{
    return this.loanForm.get('children') as FormControl;
  }

  get coapplicant(): FormControl{
    return this.loanForm.get('coapplicant') as FormControl;
  }

  // Used to preserve the original order of enums when displaying in the selector
  originalOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
    return 0;
  }; 
}



interface BadInput{
  params : string,
  message : string
}

