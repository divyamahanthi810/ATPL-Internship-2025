import { Injectable } from '@angular/core';
    import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
    import { Observable } from 'rxjs';

    @Injectable({
      providedIn: 'root'
    })
    export class Active implements CanActivate {
      constructor(private router: Router) {}

      canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        // Implement your logic here to determine if the route can be activated
        const isAuthenticated = true; // Replace with actual authentication check

        if (isAuthenticated) {
          return true;
        } else {
          this.router.navigate(['/login']); // Redirect to login page if not authenticated
          return false;
        }
      }
    }