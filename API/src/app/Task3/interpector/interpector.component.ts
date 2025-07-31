import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-interpector',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './interpector.component.html',
  styleUrl: './interpector.component.css'
})
export class InterpectorComponent {
   constructor(private http: HttpClient) { }
    user='';
  ngOnInit() {
    this.getData();
  }

  getData() {
    this.http.get('https://api.escuelajs.co/api/v1/categories').subscribe({
      next: data => { 
        console.log(data);
      },
      error: error => {
        console.error('Error getting post:', error);
      }
    });
  }
}
