import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {ActivatedRoute} from "@angular/router";
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  
  constructor(private api:ApiService,private route: ActivatedRoute,private http:HttpClient) {}
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
  slugx='';
   ngOnInit() { 
    
    this.http.post<any>('https://beta.autoreport.space/storyapi/public/viewstory', { slug: this.route.snapshot.params['slug'] }).subscribe(data => {
     
      this.title=data.stats.title;
      this.tags=data.stats.tags;
      this.created_at=data.stats.created_at;
      this.views=data.stats.views;
      this.first_name=data.stats.first_name;
      this.last_name=data.stats.last_name;
      this.description=data.stats.description;
      this.slug=data.stats.slug;
      
      this.image=data.stats.image;
  
  })


      
  
  }

}
