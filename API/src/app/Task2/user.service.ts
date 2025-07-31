// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.module';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/UserDetails/1';

  constructor(private http: HttpClient) {}

  getUserProfile(): Observable<User> {
    return this.http.get<User>(this.apiUrl).pipe(
      retry(2), // Retry twice before failing
      catchError((error) => {
        console.error('Error occurred:', error);
        // Return fallback data
        const fallback: User = {
          id: 0,
          name: 'Fallback User',
          age: 0
        };
        return of(fallback); 
      })
    );
  }
}
