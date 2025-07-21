import { Directive , ElementRef, HostListener, Renderer2, Input, OnInit } from '@angular/core';
import { UserRole } from '../user-role';
@Directive({
  selector: '[appAppToggleAnswer]'
})
export class AppToggleAnswer {

   @Input('appToggleAnswer') targetAnswerClass: string = 'faq-answer';
  private answerElement: HTMLElement | null = null;
  private isAnswerVisible: boolean = false;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private userRoleService: UserRole
  ) { }

  ngOnInit(): void {
    this.answerElement = this.el.nativeElement.nextElementSibling;
    if (!this.answerElement || !this.answerElement.classList.contains(this.targetAnswerClass)) {
      console.warn(`AppToggleAnswerDirective: Could not find an element with class "${this.targetAnswerClass}" as the next sibling.`);
      this.answerElement = null;
    }

    if (this.userRoleService.getRole() === 'admin') {
      this.showAnswer();
    } else {
      this.hideAnswer();
    }
  }

  @HostListener('click') onClick() {
    if (this.answerElement) {
      if (this.isAnswerVisible) {
        this.hideAnswer();
      } else {
        this.showAnswer();
      }
    }
  }

  private showAnswer(): void {
    if (this.answerElement) {
      this.renderer.setStyle(this.answerElement, 'display', 'block');
      this.isAnswerVisible = true;
    }
  }

  private hideAnswer(): void {
    if (this.answerElement) {
      this.renderer.setStyle(this.answerElement, 'display', 'none');
      this.isAnswerVisible = false;
    }
  }

}
