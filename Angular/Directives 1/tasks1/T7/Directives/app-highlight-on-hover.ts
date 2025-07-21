import { Directive , ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appAppHighlightOnHover]'
})
export class AppHighlightOnHover {
 @Input() highlightColor: string = 'lightyellow';

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'transparent');
  }

}
