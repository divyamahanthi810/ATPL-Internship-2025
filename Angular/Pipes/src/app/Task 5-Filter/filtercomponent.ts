import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
interface User {
  Employeename: string;
  lastLogin: Date;
  isActive: boolean;
}

@Component({
  selector: 'app-filtercomponent',
  imports: [ DatePipe,FormsModule,CommonModule],
  templateUrl: './filtercomponent.html',
  styleUrl: './filtercomponent.css'
})
export class Filtercomponent {

  users: User[] = [
    { Employeename: 'Priya', lastLogin: new Date('2025-07-18 08:30:00'), isActive: true },
    { Employeename: 'Mahesh', lastLogin: new Date('2025-07-10 12:45:00'), isActive: false },
    { Employeename: 'Lalitha', lastLogin: new Date('2025-07-19 14:20:00'), isActive: true }
  ];

  activeUsers: User[] = [];

  constructor() {
    this.filterActiveUsers();
  }

  filterActiveUsers() {
    this.activeUsers = this.users.filter(user => user.isActive);
  }
}
