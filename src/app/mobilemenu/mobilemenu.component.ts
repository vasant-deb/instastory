import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobilemenu',
  templateUrl: './mobilemenu.component.html',
  styleUrls: ['./mobilemenu.component.css']
})
export class MobilemenuComponent implements OnInit {

  constructor() { }
  usertoken='';
  profileactive='';

 

  token=localStorage.getItem('token');
  navmenu='';
  navmenut='';
  ngOnInit(): void {
   
    var splitUrl = window.location.pathname.split('/'); 
    this.profileactive=splitUrl[1];
    if(this.profileactive=="profile"){
      this.profileactive='active';
    }else{
      this.profileactive='';
    }
  }
  viewmore(){
    alert("hello");
  }
}
