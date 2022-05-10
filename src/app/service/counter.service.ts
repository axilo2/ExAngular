import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counter = new BehaviorSubject<number>(0)

  constructor() { }

  getCounter() {
    return this.counter.getValue()
  }

  addCounter(x: number) {
    let defaultValue = 1;

    this.counter.next(this.counter.value + x)

    if(!x) {
      this.counter.value + defaultValue
    }
  }

  subCounter(x: number) {
    let defaultValue = 1;

    

    if(!x) {
      this.counter.value - defaultValue
    }else if(this.counter.value <= 0 ){
      throw new Error('This value is less than 0')
    }else{
      this.counter.next(this.counter.value - x)
    }
  }
}
