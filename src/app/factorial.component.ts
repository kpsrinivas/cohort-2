import { Component } from "@angular/core";

@Component({
  selector: "factorial-component",
  template: `
  <input type="number" class="form-control" placeholder="Enter a number" [(ngModel)]="userInput">
  <button (click)="calculateFactorial()">Calculate factorial</button>
  <span *ngIf="result !== 0">The result is: {{result}}</span>
  `
})
export class FactorialComponent {
  public result:number = 0;
  public userInput:number = 0;

  calculateFactorial() {
    let result = 1;
    for (let i = 2; i <=  this.userInput; i++) {
        result *= i;
    }
    this.result = result;
  }

}