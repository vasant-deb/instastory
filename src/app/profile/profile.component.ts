import { Component, OnInit, ViewChild  } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})

export class ProfileComponent{
 
  constructor(private http: HttpClient,private router: Router,private route: ActivatedRoute) { }

  data:any;
  viewuser:any;
  viewbookmarks:any;
  viewstory:any;
  story : any;
  token=localStorage.getItem('token');
  email=localStorage.getItem('email');
  usertoken='';
  viewpostcount='';
  followStatus='';
  ownprofile='Edit Profile';
  userProfile='Follow';
  ngOnInit(): void {
    if(this.token!==this.route.snapshot.params['slug']){
    this.usertoken=this.route.snapshot.params['slug'];
    }
    this.http.post<any>(environment.apiUrl + '/getprofile', {token: this.token, email: this.email,usertoken:this.usertoken}).subscribe(data => {
      this.viewuser=data.info;
      this.viewpostcount=data.postcount;
      this.followStatus=data.followStatus;
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
