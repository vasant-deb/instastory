import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {ActivatedRoute} from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { Title,Meta } from '@angular/platform-browser';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  
  constructor(private api:ApiService,private route: ActivatedRoute,private http:HttpClient, private titleService: Title,
    private metaService: Meta) {}
  title=null;
  tags='a,b';
  created_at=null;
  views=null;
  first_name=null;
  last_name=null;
  description=null;
  slug=null;
  image=null;
  datax=null;
  agree=null;
  slugx='';
  likestatus='';
  story : any;
  token=localStorage.getItem('token');
   ngOnInit() { 
    
    if(this.token==null||this.token==undefined||this.token==""){
    this.http.post<any>('https://beta.autoreport.space/storyapi/public/viewstory', { slug: this.route.snapshot.params['slug'] }).subscribe(data => {
      this.title=data.stats.title;
      this.tags=data.stats.tags;
      this.created_at=data.stats.created_at;
      this.views=data.stats.views;
      this.first_name=data.stats.first_name;
      this.last_name=data.stats.last_name;
      this.description=data.stats.description;
      this.slug=data.stats.slug;
      this.agree=data.stats.agree;
      this.image=data.stats.image;
      this.likestatus="inactive";
      this.titleService.setTitle(data.stats.title); // <-- Update the title
      this.metaService.updateTag({ 
        name: 'description',
        content: data.stats.description.trim()
    });

  })
  }
else{

  this.http.post<any>('https://beta.autoreport.space/storyapi/public/viewstory', { token:this.token,slug: this.route.snapshot.params['slug'] }).subscribe(data => {
      this.title=data.stats.title;
      this.tags=data.stats.tags;
      this.created_at=data.stats.created_at;
      this.views=data.stats.views;
      this.first_name=data.stats.first_name;
      this.last_name=data.stats.last_name;
      this.description=data.stats.description;
      this.slug=data.stats.slug;
      this.agree=data.stats.agree;
      this.image=data.stats.image;
      this.likestatus=data.stats.likestatus;
      this.titleService.setTitle(data.stats.title); // <-- Update the title
      this.metaService.updateTag({ 
        name: 'description',
        content: data.stats.description.trim()
    });

  })
}
}
  like(storyId:any,likestatus:any){
        
    this.http.post<any>(environment.apiUrl + '/likeupdate', {token: this.token,slug:storyId,lstatus:likestatus}).subscribe(data => {
    this.agree=data.likecount;
    this.likestatus=data.likestatus;
         });   
           
         }
}
