import { Directive,ElementRef,HostListener,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appToggleAnswer]'
})
export class ToggleAnswer {

  private answerElement: HTMLElement | null = null;
  private isVisible = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click')
  toggleAnswer() {
    if (!this.answerElement) {
      this.answerElement = this.el.nativeElement.nextElementSibling;
    }
    this.isVisible = !this.isVisible;
    if (this.isVisible) {
      this.renderer.setStyle(this.answerElement, 'display', 'block');
    } else {
      this.renderer.setStyle(this.answerElement, 'display', 'none');
    }
  }
}
