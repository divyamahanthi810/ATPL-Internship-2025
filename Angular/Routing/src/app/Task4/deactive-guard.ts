  import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanDeactivateFn } from '@angular/router';
  import { EditProfile } from './edit-profile/edit-profile';
  export const deactiveGuard : CanDeactivateFn <EditProfile>=(component)=>
  { 
    return !component.dirty ?true :confirm('change will be lost');

      
    }

