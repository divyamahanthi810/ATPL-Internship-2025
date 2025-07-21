import { Component,ViewChild,HostListener ,ElementRef,signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angularproject');
  //TASK 3
  isDisabled = false;
  name = '';
  toggleDisable() {
    this.isDisabled = !this.isDisabled;
  }
  //TASK 4
  userRole: 'admin' | 'user' = 'admin'; 
  toggleRole() {
    this.userRole = this.userRole === 'admin' ? 'user' : 'admin';
}

  //TASK 5
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
    this.boxColor = width < 400 ? 'lightcoral' : 'lightgreen';
  }

  //TASK 6
  countdown = 0;     
  isDisabld  = false;
  originalText = 'Resend OTP';
  buttonText = this.originalText;

  startCountdown() {
    if (this.isDisabled) return;

    this.isDisabled = true;
    this.countdown = 5;
    this.updateButtonText();
    const interval = setInterval(() => {
      this.countdown--;
      this.updateButtonText();
      if (this.countdown <= 0) {
        clearInterval(interval);
        this.isDisabled = false;
        this.buttonText = this.originalText;
      }
    }, 1000);
  }
  updateButtonText() {
    this.buttonText = `${this.originalText} (${this.countdown})`;
  }
}
