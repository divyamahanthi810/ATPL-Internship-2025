
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css'
})
export class form implements OnInit {
  isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}
  themeForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    const savedTheme = this.getFromLocalStorage('theme') || 'light';

    this.themeForm = this.fb.group({
      theme: [savedTheme],
    });

    this.applyTheme(savedTheme);

    this.themeForm.get('theme')?.valueChanges.subscribe((newTheme) => {
      this.applyTheme(newTheme);
    });
  }

  savePreference(): void {
    const selectedTheme = this.themeForm.value.theme;
    this.setToLocalStorage('theme', selectedTheme);
    alert(`Saved theme: ${selectedTheme}`);
  }

  clearPreference(): void {
    this.removeFromLocalStorage('theme');
    const defaultTheme = 'light';
    this.themeForm.patchValue({ theme: defaultTheme });
    this.applyTheme(defaultTheme);
    alert('Theme preference cleared!');
  }

  applyTheme(theme: string): void {
    document.body.className = ''; 
    document.body.classList.add(`${theme}-theme`);
  }
  private getFromLocalStorage(key: string): string | null {
    return typeof window !== 'undefined' ? localStorage.getItem(key) : null;
  }

  private setToLocalStorage(key: string, value: string): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, value);
    }
  }

  private removeFromLocalStorage(key: string): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(key);
    }
  }
}
