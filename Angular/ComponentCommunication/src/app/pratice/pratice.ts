import { Component } from '@angular/core';
import { Observable,filter,map } from 'rxjs';
import { of } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pratice',
  imports: [AsyncPipe,CommonModule],
  template:`<li *ngFor="let item of outputData">{{ item }}</li>`,
})
export class Pratice {
outputData: number[] = [];

    ngOnInit() {
        const observable = of(1, 2, 3, 4, 5).pipe(
            map(data => data *2)
        ).subscribe(data => {
            this.outputData.push(data);
            console.log(data); 
        });
    }
  }