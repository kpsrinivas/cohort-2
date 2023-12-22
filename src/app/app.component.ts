import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'math';

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
