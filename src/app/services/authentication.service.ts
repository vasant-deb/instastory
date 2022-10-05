import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationClient } from '../clients/authentication.client';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private tokenKey = 'token';
  private emailKey = 'email';
  tokenx='';
  classx='';
  constructor(
    private authenticationClient: AuthenticationClient,
    private router: Router
  ) {}

  public login(email: string, password: string): void {
    this.classx='';
    this.authenticationClient.login(email, password).subscribe((token) => {
   
     if(token=="" || token==null){
      this.classx='toast active';
     this.tokenx=`<div class="toast-content"><i class="fas fa-solid fa-times check"></i><div class="message"><span class="text text-2">Wrong Credentials !</span>
      </div></div><div class="progress active"></div>`;
     }else{
      localStorage.setItem(this.tokenKey, token);
      localStorage.setItem(this.emailKey, email);
      this.classx='toast active';
      this.tokenx=`<div class="toast-content"><i class="fas fa-solid fa-check check"></i><div class="message"><span class="text text-2">Login Success</span>
       </div></div><div class="progress active"></div>`;
      this.router.navigate(["/profile/"+token]);
     }
     
    });
  }


  public register(firstname: string,lastname: string, email: string, gender: string, password: string): void {
    this.authenticationClient
      .register(firstname,lastname, email, gender, password)
      .subscribe((token) => {
        localStorage.setItem(this.emailKey, email);
        localStorage.setItem(this.tokenKey, token);
        
        this.router.navigate(["/editprofile"]);
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