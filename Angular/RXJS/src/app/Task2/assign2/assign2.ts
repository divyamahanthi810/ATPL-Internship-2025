import { Component } from '@angular/core';
import { of,map } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-assign2',
  imports: [CommonModule,FormsModule],
  templateUrl: './assign2.html',
  styleUrl: './assign2.css'
})
export class Assign2 {
  doubledNumbers: number[] = [];

  emitNumbers() {
    of(1, 2, 3, 4, 5).pipe(
      map(n => n * 2)
    ).subscribe(doubled => {
      this.doubledNumbers.push(doubled);
    });
  }
}
