import { Component, signal } from '@angular/core';
import { RouterEvent, RouterOutlet } from '@angular/router';
import { Event,Router,NavigationStart,NavigationEnd } from '@angular/router';
import { RouterLink,RouterLinkActive } from '@angular/router';
import { PageNotFound } from './Task6/page-not-found/page-not-found';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Routing');
  loadIndicator=true;
  constructor(private route:Router){
    this.route.events.subscribe((RouterEvent:Event) => {
      if(RouterEvent instanceof NavigationStart){
        this.loadIndicator=true;
      }
      if(RouterEvent instanceof NavigationEnd){
        this.loadIndicator=false;
      }
    });

  }
}
