import { Component } from '@angular/core';
import { ApisService } from '../apis.service';
import { UserDetails } from '../users.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user1',
  imports: [CommonModule],
  templateUrl: './user1.component.html',
  styleUrl: './user1.component.css'
})
export class User1Component {

  users: UserDetails[] = [];
  private url = 'http://localhost:3000/UserDetails';

  constructor(private api: ApisService<UserDetails>) {}

  ngOnInit() {
    this.api.getAll(this.url).subscribe(data => this.users = data);
  }
}
