import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }
  getAuthToken(): string {
    return 'your_auth_token_here';
  }
}
