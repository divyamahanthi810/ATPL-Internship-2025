import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-assign4',
  imports: [FormsModule, CommonModule],
  templateUrl: './assign4.html',
  styleUrl: './assign4.css'
})
export class Assign4 {
  private themeSubject = new BehaviorSubject<string>('light');
  theme = 'dark';

  constructor() {
    if (typeof window !== 'undefined' && localStorage) {

    const saved = localStorage.getItem('theme');
    if (saved) this.themeSubject.next(saved);

    this.themeSubject.subscribe(value => {
      this.theme = value;
      localStorage.setItem('theme', value);
    });
  }
}
  toggleTheme(isDark: boolean) {
    this.themeSubject.next(isDark ? 'dark' : 'light');
  }
}
