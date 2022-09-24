import { Component, OnInit } from '@angular/core';

import {ApiService} from '../api.service';

import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from "@angular/router";
import { AuthenticationService } from './../services/authentication.service';
@Component({
  selector: 'app-search',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {
  data:any;
  story : any;
  trendingstory:any;
  count:any;
  token=localStorage.getItem('token');
  slug=this.route.snapshot.params['slug'];
  constructor(public account :AuthenticationService,private api:ApiService,private http: HttpClient,private route: ActivatedRoute) {}
  ngOnInit() {
          if(this.token=="" || this.token===undefined || this.token===null){
            this.http.post<any>(environment.apiUrl + '/gettags', {slug: this.route.snapshot.params['slug']}).subscribe(data => {
              this.story=data.stats;
              this.count=data.count;
            }); 
        }
        else {
            this.http.post<any>(environment.apiUrl + '/gettagslogin', {token:this.token,slug: this.route.snapshot.params['slug']}).subscribe(data => {
            this.story=data.stats;
            this.count=data.count;
          });  
            }
        }
  
  like(storyId:any,likestatus:any){
        
   this.http.post<any>(environment.apiUrl + '/likeupdate', {token: this.token,slug:storyId,lstatus:likestatus}).subscribe(data => {
   
    this.http.post<any>(environment.apiUrl + '/gettagslogin', {token:this.token,slug: this.route.snapshot.params['slug']}).subscribe(data => {
      this.story=data.stats;
    });  

        });   
          
        }
        save(storyId:any,bookmarkstatus:any){
        
          this.http.post<any>(environment.apiUrl + '/savebookmark', {token: this.token,story_id:storyId,bstatus:bookmarkstatus}).subscribe(data => {
            this.http.post<any>(environment.apiUrl + '/gettagslogin', {token:this.token,slug: this.route.snapshot.params['slug']}).subscribe(data => {
              this.story=data.stats;
            });  
            });  
                 
        }
 
}
