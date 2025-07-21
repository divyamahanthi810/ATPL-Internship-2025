import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserRole {
  private currentRoleSubject: BehaviorSubject<string> = new BehaviorSubject<string>('user1'); // Default role
  public currentRole$: Observable<string> = this.currentRoleSubject.asObservable();

  constructor() { }

  setRole(role: string): void {
    this.currentRoleSubject.next(role);
  }

  getRole(): string {
    return this.currentRoleSubject.getValue();
  }
}
