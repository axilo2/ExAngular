import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor( private http: HttpClient ) { }

  getAll() {
    return this.http.get("https://api.covid19api.com/")
      .pipe(
        tap((data) => console.log(data))
      )
  }
}
