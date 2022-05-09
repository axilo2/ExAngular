import { Injectable } from '@angular/core';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private _counter: number = 0;

  constructor() { }

  getCounter() {
   this._counter = this._counter;
  }

  addCounter(x: number) {
    this._counter = this._counter + x;
    console.log(this._counter);
  }

  subCounter(x: number) {
    if(this._counter < 0) {
      console.log(error, 'This value is less than 0');
    }else{
      this._counter = this._counter - x;
      console.log(this._counter);
    }
  }
}
