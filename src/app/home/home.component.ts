import { Component, OnInit } from '@angular/core';
import { CovidService } from '../Services/covid.service';

@Component({
  selector: 'angapp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  prop: {name: string, endpoint: string}[] = [];

  constructor(private covidService: CovidService) { }

  ngOnInit(): void {
    this.covidService.getAll().subscribe((data) => {
      this.prop = Object.entries(data).map((result) => {
        return {
          name: result[0],
          endpoint: result[0],
        };
      });
    });
  }

}
