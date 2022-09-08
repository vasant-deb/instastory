import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
@Component({
  selector: 'app-rightsidebar',
  templateUrl: './rightsidebar.component.html',
  styleUrls: ['./rightsidebar.component.css']
})
export class RightsidebarComponent implements OnInit {

  story=null;
  
  tags=null;
  constructor(private api:ApiService) {}
  
  
  ngOnInit() {
    
      this.api.getrecentstory().subscribe((data:any)=>{
      this.story=data.recentpost;
      this.tags = data.tags.split(',');
      console.log(typeof this.tags); // 👉️ object

      

      
      console.log(this.tags);
  });

}
}