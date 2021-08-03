import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoanCalculatorBackend } from '../services/loan-calculator-backend.service';

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
      monthlyIncome:[],
      requestedAmount:[],
      loanTerm:[],
      children:[],
      coapplicants:[]
    })

    this.coapplicantOptions = this.backend.getCoapplicantOptions();
    console.log(this.coapplicantOptions);
    this.childrenOptions = this.backend.getChildrenOptions();
   }
  

  ngOnInit(): void {
  }

  submit(){

  }

  get monthlyIncome(){
    return this.loanForm.get('monthlyIncome');
  }

  get requestedAmount(){
    return this.loanForm.get('requestedAmount');
  }

  get loanTerm(){
    return this.loanForm.get('loanTerm');
  }

  get children(){
    return this.loanForm.get('children');
  }

  get coapplicants(){
    return this.loanForm.get('coapplicants');
  }

}
