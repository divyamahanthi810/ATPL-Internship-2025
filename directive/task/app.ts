import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Hasrole } from './role/hasrole';
import { HasRole } from './has-role';
@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule, Hasrole],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Task7');
}
