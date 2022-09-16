import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationClient } from '../clients/authentication.client';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private tokenKey = 'token';
  private emailKey = 'email';
  constructor(
    private authenticationClient: AuthenticationClient,
    private router: Router
  ) {}

  public login(email: string, password: string): void {
    this.authenticationClient.login(email, password).subscribe((token) => {
      localStorage.setItem(this.tokenKey, token);
      localStorage.setItem(this.emailKey, email);
      this.router.navigate(['/profile']);
    });
  }


  public register(firstname: string,lastname: string, email: string, gender: string, password: string): void {
    this.authenticationClient
      .register(firstname,lastname, email, gender, password)
      .subscribe((token) => {
        localStorage.setItem(this.emailKey, email);
        localStorage.setItem(this.tokenKey, token);
        this.router.navigate(['/profile']);
      });
  }

  public logout() {
    localStorage.removeItem(this.emailKey);
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }

  public isLoggedIn(): boolean {
    let token = localStorage.getItem(this.tokenKey);
    return token != null && token.length > 0;
  }

  public getToken(): string | null {
    return this.isLoggedIn() ? localStorage.getItem(this.tokenKey) : null;
  }
}