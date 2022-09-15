import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ApiService} from '../api.service';

import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
  public loginForm!: FormGroup;
 data:any;
status=null;
 public registerForm!: FormGroup;
  constructor(private http: HttpClient,private router: Router,private api:ApiService, private authenticationService: AuthenticationService) {}
   token=localStorage.getItem('token');
   email=localStorage.getItem('email');
  ngOnInit() {

    
    this.registerForm = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
    this.http.post<any>(environment.apiUrl + '/verify', {token: this.token, email: this.email}).subscribe(data => {
      this.status=data.status;
      if(this.status=="true"){
        console.log(this.status);
      this.router.navigate(['/profile']);
    }  else{
      this.router.navigate(['/login']);

    }
  })

  }

  public onLoginSubmit() {
    this.authenticationService.login(
      this.loginForm.get('email')!.value,
      this.loginForm!.get('password')!.value
    );
  }

  public onRegSubmit() {
    this.authenticationService.register(
      this.registerForm.get('firstname')!.value,
      this.registerForm.get('lastname')!.value,
      this.registerForm.get('email')!.value,
      this.registerForm!.get('password')!.value
    );
  }
  myclass="";
  mobile="";
  mobilex="";
public viewsignup(){
  this.myclass="right-panel-active";
}
public viewsignin(){
  this.myclass="";
}
public viewmobsignup(){
  this.mobile="opacityx";
  this.mobilex="activemobile";
}
public viewmobsignin(){
  this.mobile="activemobile";
  this.mobilex="opacityx";
}
}
