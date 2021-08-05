import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoanCalculatorBackend } from '../services/loan-calculator-backend.service';
import { SelectorValidators } from './selector.validators';
import { NumberValidator } from './number.validator';
import { AppError } from '../common/app-error';
import { BadInputError } from '../common/bad-input-error';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'loan-form',
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.css']
})
export class LoanFormComponent implements OnInit {


  loanForm: FormGroup;
  coapplicantOptions: any;
  childrenOptions: any;

  private numberFormat: string = "^(\d|\s)+((,|\.)[0-9]{2})?$";

  constructor(private backend : LoanCalculatorBackend, fb : FormBuilder) {
    this.loanForm = fb.group({
      monthlyIncome:['', [Validators.required, Validators.min(500000), Validators.pattern(this.numberFormat)]],
      requestedAmount:['', [Validators.required, Validators.min(20000000), Validators.pattern(this.numberFormat)]],
      loanTerm:['', [Validators.required, NumberValidator.minValue(36), NumberValidator.maxValue(360), NumberValidator.isNumber]],
      children:['', [Validators.required]],
      coapplicant:['',  [Validators.required]],
    })
  }
  
  ngOnInit(): void {
    this.coapplicantOptions = this.backend.getCoapplicantOptions();
    this.childrenOptions = this.backend.getChildrenOptions();
  }

  submit(){
    if(this.loanForm.valid){
      // Convert fields to number
      this.backend.calculateLoan(this.loanForm.value).subscribe(
        response => {
          alert("Success! Spend your loan well :)");
          console.log(response);
        },
        (error: AppError) => {
          if (error instanceof BadInputError) {
            error.badInputs.forEach((element: any) => {
              let badInput: BadInput = element; // integrate to forEach?
              this.loanForm.get(badInput.params)?.setErrors({"serverError" : {"message": badInput.message}});
            });
          } else throw error; 
        }
      );
    }
  }

  get monthlyIncome(){
    return this.loanForm.get('monthlyIncome') as FormControl;
  }

  get requestedAmount(){
    return this.loanForm.get('requestedAmount') as FormControl;
  }

  get loanTerm(){
    return this.loanForm.get('loanTerm') as FormControl;
  }

  get children(){
    return this.loanForm.get('children') as FormControl;
  }

  get coapplicant(){
    return this.loanForm.get('coapplicant') as FormControl;
  }
}

interface BadInput{
  params : string,
  message : string
}

