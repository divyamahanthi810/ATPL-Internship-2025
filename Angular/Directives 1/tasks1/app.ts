import { Component,ElementRef,HostListener,viewChild, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHoverHighlight } from './app-hover-highlight';
import { AppToggleDirective } from './app-toggle';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AppHoverHighlight,AppToggleDirective,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Directive');
  showTips = false;
  show=false;
  toggleTips() {
    this.showTips = !this.showTips;
  }
  isVisible= false; 
  
  //TASK 3
  Disabled = false;
  name = '';
  toggleDisable() {
    this.Disabled = !this.Disabled;
  }
  
  //TASK 4
  userRole: 'admin' | 'user' = 'admin'; 
  toggleRole() {
    this.userRole = this.userRole === 'admin' ? 'user' : 'admin';
}

  //TASK 5
  elementWidth = 10;
  elementHeight = 10;
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
    this.boxColor = width < 400 ? 'orange' : 'lightgreen';
  }

  //TASK 6
  countdown = 0;     
  isDisabld  = false;
  originalText = 'Resend OTP';
  buttonText = this.originalText;
  startCountdown() {
    if (this.isDisabld) return;
    this.isDisabld = true;
    this.countdown = 5;
    this.updateButtonText();
    const interval = setInterval(() => {
      this.countdown--;
      this.updateButtonText();
      if (this.countdown <= 0) {
        clearInterval(interval);
        this.isDisabld = false;
        this.buttonText = this.originalText;
      }
    }, 1000);
  }
  updateButtonText() {
    this.buttonText = `${this.originalText} (${this.countdown})`;
  }

}
