import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { CounterService } from '../service/counter.service';

@Component({
  selector: 'angapp-edit-counter',
  templateUrl: './edit-counter.component.html',
  styleUrls: ['./edit-counter.component.css']
})
export class EditCounterComponent implements OnInit {

  @Output() increment: EventEmitter<number> = new EventEmitter()
  @Output() decrement: EventEmitter<number> = new EventEmitter()


  newNumber: FormControl = new FormControl('')

  constructor(private clickCounter : CounterService) { }

  ngOnInit(): void {
  }

  add(plus: number) {
    this.increment.emit(plus)
  }
  sub(minus: number) {
    this.decrement.emit(minus)
  }
}
