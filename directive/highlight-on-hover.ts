import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightOnHover]'
})
export class HighlightOnHover {

  @Input() highlightColor: string = 'lightblue'; // Default highlight color

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.el.nativeElement, 'background-color');
  }
}
