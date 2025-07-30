import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Dashboard1Component } from './dashboard1.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template: `
    <h1>App</h1>
    <button (click)="login()">Login</button>
    <button (click)="logout()">Logout</button>
    <nav>
      <a routerLink="/admin">Admin</a> |
      <a routerLink="/edit-profile">Edit Profile</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
