import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  story=null;
  constructor(private api:ApiService) {}
  ngOnInit() {
    
      this.api.getstory().subscribe((data:any)=>{
      this.story=data.stats;
  });
  }
  
}
