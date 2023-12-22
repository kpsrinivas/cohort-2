import { Component } from "@angular/core";

@Component({
  selector: "sum-component",
  template: `
  <input type="number" class="form-control" placeholder="Enter a number" [(ngModel)]="userInput">
  <button (click)="calculateSum()">Calculate sum</button>
  <span *ngIf="result !== 0">The result is: {{result}}</span>
  `
})
export class SumComponent {
  public result:number = 0;
  public userInput:number = 0;

  calculateSum() {
    this.result = (this.userInput * (this.userInput + 1))/ 2;
  }

}