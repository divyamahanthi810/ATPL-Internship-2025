import { Injectable } from '@angular/core';
    import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
    import { Observable } from 'rxjs';
    import { EditProfile } from './edit-profile/edit-profile';

    @Injectable({
      providedIn: 'root'
    })
    export class deactiveGuard implements CanDeactivate <EditProfile>{

      canDeactivate(component:EditProfile){
        if(component.message.dirty){
          return window.confirm('you have some unsaved changes')
        }
        return true;
      }

      
    }

