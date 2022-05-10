import { Injectable } from '@angular/core';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private _counter: number = 0;

  constructor() { }

  getCounter() {
    if( this._counter < 0){
      return console.log("ERR: This value is less than 0")
    }else{
      return this._counter
    }
  }

  addCounter(x: number) {
    this._counter += x;
  }

  subCounter(x: number) {
    if(this._counter < 0) {
      console.log(error, 'This value is less than 0');
    }else{
      this._counter -= x;
    }
  }
}
