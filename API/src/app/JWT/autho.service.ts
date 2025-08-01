import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthoService {
  private readonly TOKEN_KEY = 'authToken';

  login(username: string, password: string): boolean {
    // Simulate login
    if (username === 'admin' && password === 'admin') {
      const fakeToken = 'fake-jwt-token-123';
      localStorage.setItem(this.TOKEN_KEY, fakeToken);
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}

