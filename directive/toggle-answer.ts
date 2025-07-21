import { Directive , ElementRef, HostListener, Renderer2 ,Input} from '@angular/core';

@Directive({
  selector: '[appToggleAnswer]'
})
export class ToggleAnswer {
@Input('appToggleAnswerRole') currentUserRole: string = 'user1';

  private isAnswerVisible: boolean = false;
  private answerElement: HTMLElement | null = null; // Store a reference to the answer element

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // Get the next sibling which is assumed to be the answer
    this.answerElement = this.el.nativeElement.nextElementSibling;

    if (this.answerElement) {
      if (this.currentUserRole === 'admin') {
        // Admin sees the answer by default
        this.renderer.removeStyle(this.answerElement, 'display'); // Ensure it's visible
        this.isAnswerVisible = true; // Mark as visible
      } else {
        // Other roles hide the answer by default
        this.renderer.setStyle(this.answerElement, 'display', 'none'); // Ensure it's hidden
        this.isAnswerVisible = false; // Mark as hidden
      }
    }
  }

  @HostListener('click') onClick() {
    // Prevent toggling if the user is an admin and the answer is already visible.
    // This makes admin answers "sticky-visible" unless explicitly hidden by other means (not via this click).
    // If you want admin to be able to hide it by clicking, remove the '&& this.isAnswerVisible' part.
    if (this.currentUserRole === 'admin' && this.isAnswerVisible) {
      // For admin, if it's already visible, clicking does nothing by default.
      // If you want admin to be able to hide it, you would remove this 'return'
      // and let the toggle logic below execute.
      return;
    }

    // Only proceed with toggling if not an admin (or if admin is allowed to toggle)
    if (this.answerElement) {
      this.isAnswerVisible = !this.isAnswerVisible; // Toggle the state

      if (this.isAnswerVisible) {
        this.renderer.removeStyle(this.answerElement, 'display'); // Show
      } else {
        this.renderer.setStyle(this.answerElement, 'display', 'none'); // Hide
      }
    }
  }

}
