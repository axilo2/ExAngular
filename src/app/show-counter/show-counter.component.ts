import { Component, OnInit } from '@angular/core';
import { CounterService } from '../service/counter.service';

@Component({
  selector: 'angapp-show-counter',
  templateUrl: './show-counter.component.html',
  styleUrls: ['./show-counter.component.css']
})
export class ShowCounterComponent implements OnInit {

  getAdd(plus: number) {
    return this.counterService.addCounter(plus)
  }

  constructor( public counterService: CounterService ) {  }

  ngOnInit(): void {
  }

}
