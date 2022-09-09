import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  data:any;
  viewuser:any;
  viewbookmarks:any;
  viewstory:any;
  
  constructor(private http: HttpClient,private router: Router) { }
  token=localStorage.getItem('token');
  email=localStorage.getItem('email');
  ngOnInit(): void {
    this.http.post<any>(environment.apiUrl + '/getprofile', {token: this.token, email: this.email}).subscribe(data => {
      this.viewuser=data.info;
  })

  //getBookmarks
  this.http.post<any>(environment.apiUrl + '/getbookmarks', {email: this.email}).subscribe(data => {
    this.viewbookmarks=data.info;
})
this.http.post<any>(environment.apiUrl + '/yourstory', {email: this.email}).subscribe(data => {
  this.viewstory=data.info;
})
//yourwriting

  }
}
