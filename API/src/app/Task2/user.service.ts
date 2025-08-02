import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.module';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/UserDetails';

  constructor(private http: HttpClient) {}

  getUserProfile(): Observable<User> {
    return this.http.get<User>(this.apiUrl).pipe(
      retry(1), 
      catchError((error) => {
        alert('Error Occurred')
        console.error('Error occurred:', error);
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
