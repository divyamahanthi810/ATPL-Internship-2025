import { Directive,Input,TemplateRef,ViewContainerRef } from '@angular/core';
@Directive({
  selector: '[appHasRole]'
})
export class HasRole {

    private _roles: string[] = [];
  private currentUserRole: string = 'user1'; // This would typically come from an authentication service

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  @Input()
  set appHasRole(allowedRoles: string[]) {
    this._roles = allowedRoles;
    this.updateVisibility();
  }

  // In a real application, you'd inject an AuthService to get the current user's role
  // For demonstration, we're hardcoding it.
  // Example: setCurrentUserRole(role: string) { this.currentUserRole = role; this.updateVisibility(); }

  private updateVisibility(): void {
    if (this._roles.includes(this.currentUserRole)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
