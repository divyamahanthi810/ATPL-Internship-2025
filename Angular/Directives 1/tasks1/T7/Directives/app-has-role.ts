import { Directive, Input, TemplateRef, ViewContainerRef, OnInit, OnDestroy  } from '@angular/core';
import { UserRole } from '../user-role';
import { Subscription } from 'rxjs';
@Directive({
  selector: '[appAppHasRole]'
})
export class AppHasRole {

  @Input() appHasRole: string[] = []; 
  private roleSubscription: Subscription = new Subscription();
  private hasView: boolean = false;
  AppHasRole:any;
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private userRoleService: UserRole
  ) { }

  ngOnInit(): void {
    this.roleSubscription = this.userRoleService.currentRole$.subscribe(role => {
      this.updateView(role);
    });
  }

  private updateView(currentRole: string): void {
    const hasPermission = this.appHasRole.includes(currentRole);

    if (hasPermission && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (!hasPermission && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }

  ngOnDestroy(): void {
    if (this.roleSubscription) {
      this.roleSubscription.unsubscribe();
    }
  }

}
