import { Component, OnInit, ViewChild  } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})

export class ProfileComponent{
 
  constructor(private http: HttpClient,private router: Router) { }

  data:any;
  viewuser:any;
  viewbookmarks:any;
  viewstory:any;
  story : any;
  token=localStorage.getItem('token');
  email=localStorage.getItem('email');

  ngOnInit(): void {
    this.http.post<any>(environment.apiUrl + '/getprofile', {token: this.token, email: this.email}).subscribe(data => {
      this.viewuser=data.info;
  })

  this.http.post<any>(environment.apiUrl + '/getbookmarks', {email: this.email}).subscribe(data => {
    this.story=data.info;
   
});      

this.http.post<any>(environment.apiUrl + '/yourstory', {email: this.email}).subscribe(data => {
  this.viewstory=data.info;
})
//yourwriting

  }
  
        like(storyId:any,likestatus:any){
        
       this.http.post<any>(environment.apiUrl + '/likeupdate', {token: this.token,slug:storyId,lstatus:likestatus}).subscribe(data => {
   
      this.http.post<any>(environment.apiUrl + '/getbookmarks', {email: this.email}).subscribe(data => {
      this.story=data.info;});
      this.http.post<any>(environment.apiUrl + '/yourstory', {email: this.email}).subscribe(data => {
      this.viewstory=data.info;})
    
        });   
          
        }
}
