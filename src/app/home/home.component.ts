import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [3, 6, 9, 12];

  story : any;
  token=localStorage.getItem('token');
  constructor(private api:ApiService,private http: HttpClient) {}
  ngOnInit() {

          if(this.token=="" || this.token===undefined || this.token===null){
          this.api.getstory().subscribe((data:any)=>{
          this.story=data.stats;
         
        });
        }
        else {
            this.http.post<any>(environment.apiUrl + '/homelogedin', {token: this.token}).subscribe(data => {
            this.story=data.stats;
           
        });        
            }
        
        }
        
        like(storyId:any,likestatus:any){
        
   this.http.post<any>(environment.apiUrl + '/likeupdate', {token: this.token,slug:storyId,lstatus:likestatus}).subscribe(data => {
   
    this.http.post<any>(environment.apiUrl + '/homelogedin', {token: this.token}).subscribe(data => {
      this.story=data.stats;
  });
        });   
          
        }
        save(storyId:any,bookmarkstatus:any){
        
          this.http.post<any>(environment.apiUrl + '/savebookmark', {token: this.token,story_id:storyId,bstatus:bookmarkstatus}).subscribe(data => {
            this.http.post<any>(environment.apiUrl + '/homelogedin', {token: this.token}).subscribe(data => {
              this.story=data.stats;
          });
            });  
                 
        }
 fetchPosts(): void {
  if(this.token=="" || this.token===undefined || this.token===null){
    this.api.getstory().subscribe((data:any)=>{
    this.story=data.stats;
   
  });
  }
  else {
      this.http.post<any>(environment.apiUrl + '/homelogedin', {token: this.token}).subscribe(data => {
      this.story=data.stats;
     
  });  

 }
}
        onTableDataChange(event: any) {
          this.page = event;
          this.fetchPosts();
        }
        onTableSizeChange(event: any): void {
          this.tableSize = event.target.value;
          this.page = 1;
          this.fetchPosts();
        }
  
}
