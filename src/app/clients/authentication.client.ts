import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationClient {
  constructor(private http: HttpClient) {}

  public login(email: string, password: string): Observable<string> {
    return this.http.post(
      environment.apiUrl + '/login',
      {
        email: email,
        password: password,
      },
      { responseType: 'text' }
    );
  }

  public register(
    firstname: string,
    lastname: string,
    email: string,
    gender: string,
    password: string
  ): Observable<string> {
    return this.http.post(
      environment.apiUrl + '/register',
      {
        firstname: firstname,
        lastname:lastname,
        email: email,
        gender:gender,
        password: password,
      },
      { responseType: 'text' }
    );
   
  }
  
}