import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {ApiService} from '../api.service';
@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit {

  story : any;
  token=localStorage.getItem('token');
  email=localStorage.getItem('email');
  viewstory:any;
  constructor(private api:ApiService,private http: HttpClient) {}
  ngOnInit() {
    
       
            this.http.post<any>(environment.apiUrl + '/getbookmarks', {email: this.email}).subscribe(data => {
            this.story=data.info;
           
        });      

        this.http.post<any>(environment.apiUrl + '/yourstory', {email: this.email}).subscribe(data => {
          this.viewstory=data.info;
        })
        
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
