  import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanDeactivateFn } from '@angular/router';
  import { EditProfile } from './edit-profile/edit-profile';
  export const deactiveGuard : CanDeactivateFn <EditProfile>=(component)=>
  { 
    return !component.dirty ?true :confirm('Changes will be lost.Are you sure you want to go?');

      
    }

