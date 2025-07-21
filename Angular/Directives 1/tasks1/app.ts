import { Component,ViewChild,HostListener ,ElementRef,signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angularproject');
  isDisabled = false;
  name = '';
  toggleDisable() {
    this.isDisabled = !this.isDisabled;
  }
  userRole: 'admin' | 'user' = 'admin'; // simulate role
  toggleRole() {
    this.userRole = this.userRole === 'admin' ? 'user' : 'admin';
}

  elementWidth = 30;
  elementHeight = 40;
  boxColor = 'lightblue';

  @ViewChild('resizableDiv') resizableDiv!: ElementRef;

  ngAfterViewInit() {
    this.updateSize();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateSize();
  }

  updateSize() {
    const width = this.resizableDiv.nativeElement.offsetWidth;
    const height = this.resizableDiv.nativeElement.offsetHeight;

    this.elementWidth = width;
    this.elementHeight = height;

    console.log(`Element size: ${width}px x ${height}px`);

    // Update color using logic
    this.boxColor = width < 400 ? 'lightcoral' : 'lightgreen';
  }
  countdown = 0;       // Countdown timer
  isDisabld  = false;  // Button state
  originalText = 'Resend OTP';
  buttonText = this.originalText;

  startCountdown() {
    if (this.isDisabled) return;

    this.isDisabled = true;
    this.countdown = 5; // seconds
    this.updateButtonText();

    const interval = setInterval(() => {
      this.countdown--;
      this.updateButtonText();

      if (this.countdown <= 0) {
        clearInterval(interval);
        this.isDisabled = false;
        this.buttonText = this.originalText;
      }
    }, 500);
  }
  updateButtonText() {
    this.buttonText = `${this.originalText} (${this.countdown})`;
  }
}