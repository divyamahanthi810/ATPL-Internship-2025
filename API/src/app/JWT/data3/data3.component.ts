import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-data3',
  imports: [JsonPipe],
  templateUrl: './data3.component.html',
  styleUrl: './data3.component.css'
})
export class Data3Component {
  data: any;

  constructor(private http: HttpClient) {}

  loadData() {
    this.http.get('http://localhost:3000/protected').subscribe(res => {
      this.data = res;
    });
  }
}

