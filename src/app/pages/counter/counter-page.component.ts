import { Component, signal } from "@angular/core";

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css']
})
export class CounterPageComponent{
  counter: number = 10;
  counterSignal = signal(10);

  increaseBy( value: number){
    this.counter += value;
    this.counterSignal.update(current => current + value);
  }

  decreaseBy( value: number){
  this.counter -= value;
  }

  resetCounter( ){
    this.counter = 0;
    this.counterSignal.set(0);
  }
}