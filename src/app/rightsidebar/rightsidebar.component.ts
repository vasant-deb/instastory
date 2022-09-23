import { Component, OnInit } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import {ApiService} from '../api.service';
import { AuthenticationService } from './../services/authentication.service';
@Component({
  selector: 'app-rightsidebar',
  templateUrl: './rightsidebar.component.html',
  styleUrls: ['./rightsidebar.component.css']
})
export class RightsidebarComponent implements OnInit {

  story=null;
  authors:any;
  tags=null;
  constructor(public authorx:AuthenticationService,private api:ApiService) {}
  
  
  ngOnInit() {
      this.api.getrecentstory().subscribe((data:any)=>{
      this.story=data.recentpost;
      this.tags = data.tags.split(',');
  });
  this.api.getauthor().subscribe((data:any)=>{
   
    this.authors=data.stats;
    console.log(data.stats);
});
}
}