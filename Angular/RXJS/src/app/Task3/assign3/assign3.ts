import { Component } from '@angular/core';
import { switchMap,of,delay ,Subject} from 'rxjs';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-assign3',
  imports: [FormsModule,NzPaginationModule,NzTableModule,CommonModule],
  templateUrl: './assign3.html',
  styleUrl: './assign3.css'
})
export class Assign3 {
users: any[] = [];
  reloadTrigger = new Subject<void>();

  constructor() {
    this.reloadTrigger.pipe(
      switchMap(() => this.fetchUsers())
    ).subscribe(data => this.users = data);
    
    this.reloadTrigger.next(); 
  }

  reloadUsers() {
    this.reloadTrigger.next();
  }

  fetchUsers() {
    const dummyData = [
      { name: 'Alice', email: 'alice@example.com' },
      { name: 'Bob', email: 'bob@example.com' }
    ];
    return of(dummyData).pipe(delay(1000));
  }
}

