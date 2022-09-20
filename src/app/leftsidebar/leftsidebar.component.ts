import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-leftsidebar',
  templateUrl: './leftsidebar.component.html',
  styleUrls: ['./leftsidebar.component.css']
})
export class LeftsidebarComponent implements OnInit {
 
  constructor(private Location:Location,private route: ActivatedRoute,private router:Router) { }
 
  usertoken='';
  profileactive='';
  profileactivex='';
  token=localStorage.getItem('token');
 
  ngOnInit(): void {
    var splitUrl = window.location.pathname.split('/'); 
    this.profileactive=splitUrl[1];
    this.profileactivex=splitUrl[1];
    if(this.profileactive=="profile"){
      this.profileactive='active';
    }else{
      this.profileactive='';
    }
  }

}
