import { Component, OnInit } from '@angular/core';

import {ApiService} from '../api.service';

import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

import { AuthenticationService } from './../services/authentication.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  data:any;
  story : any;
  trendingstory:any;
  recologedin:any;
  token=localStorage.getItem('token');
  constructor(public account :AuthenticationService,private api:ApiService,private http: HttpClient) {}
  ngOnInit() {
          if(this.token=="" || this.token===undefined || this.token===null){
          this.api.getstory().subscribe((data:any)=>{
          this.story=data.stats;
        });
        this.api.gettrendingstory().subscribe((data:any)=>{
          this.trendingstory=data.stats;
        });
        }
        else {
            this.http.post<any>(environment.apiUrl + '/homelogedin', {token: this.token}).subscribe(data => {
            this.story=data.stats;
          });  
          this.http.post<any>(environment.apiUrl + '/trendinglogedin', {token: this.token}).subscribe(data => {
            this.trendingstory=data.stats;
          });   
          this.http.post<any>(environment.apiUrl + '/recologedin', {token: this.token}).subscribe(data => {
            this.recologedin=data.stats;
          });   
            }
        }
  
  like(storyId:any,likestatus:any){
        
   this.http.post<any>(environment.apiUrl + '/likeupdate', {token: this.token,slug:storyId,lstatus:likestatus}).subscribe(data => {
   
    this.http.post<any>(environment.apiUrl + '/homelogedin', {token: this.token}).subscribe(data => {
      this.story=data.stats;
  });

  this.http.post<any>(environment.apiUrl + '/trendinglogedin', {token: this.token}).subscribe(data => {
    this.trendingstory=data.stats;
});

this.http.post<any>(environment.apiUrl + '/recologedin', {token: this.token}).subscribe(data => {
  this.recologedin=data.stats;
}); 

        });   
          
        }
        save(storyId:any,bookmarkstatus:any){
        
          this.http.post<any>(environment.apiUrl + '/savebookmark', {token: this.token,story_id:storyId,bstatus:bookmarkstatus}).subscribe(data => {
            this.http.post<any>(environment.apiUrl + '/homelogedin', {token: this.token}).subscribe(data => {
              this.story=data.stats;
          });
          this.http.post<any>(environment.apiUrl + '/trendinglogedin', {token: this.token}).subscribe(data => {
            this.trendingstory=data.stats;
        });
        
        this.http.post<any>(environment.apiUrl + '/recologedin', {token: this.token}).subscribe(data => {
          this.recologedin=data.stats;
        }); 
            });  
                 
        }
 
}
