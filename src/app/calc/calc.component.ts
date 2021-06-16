import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  userInput = '';
  currentOp;
  operator;
  num1;
  constructor() { }

  ngOnInit(): void {
  }

  clickNumber(event){
      if(this.currentOp){
        this.userInput = '';
        this.operator = this.currentOp;
        this.currentOp = undefined;
      }
      this.userInput += event.target.innerText  
  }

  reset(){
    this.userInput = '';
  }

  calc(event){
    let op = event.target.innerText;
    switch (op) {
      case '+':
        this.currentOp = '+';
        this.num1 = this.userInput;
        this.userInput = op;
        break;
      case '-':
        this.currentOp = '-';
        this.num1 = this.userInput;
        this.userInput = op;
        break;
      case '*':
        this.currentOp = '*';
        this.num1 = this.userInput;
        this.userInput = op;
        break;
      case '/':
        this.currentOp = '/';
        this.num1 = this.userInput;
        this.userInput = op;
        break;
      case '%':
        this.currentOp = '%';
        this.num1 = this.userInput;
        this.userInput = op;
        break;
      case '=':
        let res = this.operator === '+'? Number(this.userInput) + Number(this.num1):
                  this.operator === '-'? Number(this.num1) - Number(this.userInput):
                  this.operator === '*'? Number(this.userInput) * Number(this.num1):
                  this.operator === '/'? Number(this.num1) / Number(this.userInput):
                  this.operator === '%'? Number(this.num1) % Number(this.userInput): 0;
        this.userInput = res;
    }
  }
}
