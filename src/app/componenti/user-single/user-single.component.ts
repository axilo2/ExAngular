import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'angapp-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {

  buttonContent: string = "Watch User Details";
  @Input() showDetails = false;
  @Input() showNever = true;
  @Output() clicked = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.showDetails = !this.showDetails;  //observable 
    this.buttonContent = this.showDetails ? "Close Details" : "Watch User Details";
    this.clicked.emit();
  }

}
