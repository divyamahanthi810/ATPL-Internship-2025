import { Component, signal } from '@angular/core';
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
  // if(isVisible){

  // }

}
