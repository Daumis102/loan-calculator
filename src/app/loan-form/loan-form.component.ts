import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoanCalculatorBackend } from '../services/loan-calculator-backend.service';
import { SelectorValidators } from './selector.validators';
import { NumberSizeValidator } from './number-size.validator';


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
      monthlyIncome:['', [Validators.required, NumberSizeValidator.minValue(500000)]],
      requestedAmount:['', [Validators.required, NumberSizeValidator.minValue(20000000)]],
      loanTerm:['', [Validators.required, NumberSizeValidator.minValue(36), NumberSizeValidator.maxValue(360)]],
      children:['', [Validators.required, SelectorValidators.mustBeSelected]],
      coapplicant:['',  [Validators.required, SelectorValidators.mustBeSelected]],
    })
  }
  
  ngOnInit(): void {
    this.coapplicantOptions = this.backend.getCoapplicantOptions();
    this.childrenOptions = this.backend.getChildrenOptions();
  }

  submit(){
    console.log(this.loanForm);
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
