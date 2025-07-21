//Task 2
import {Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[[appAppHoverHighlight]]'
})
export class AppHoverHighlight {
  @Input('appAppHoverHighlight') highlightColor: string = 'yellow';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
