import { Component, OnInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-mobilemenu',
  templateUrl: './mobilemenu.component.html',
  styleUrls: ['./mobilemenu.component.css']
})
export class MobilemenuComponent {

  constructor() { }
  usertoken='';
  profileactive='';
  profileactivex='';
 

  token=localStorage.getItem('token');
  navmenu='';
  navmenut='';
  ngOnInit(): void {
   
    var splitUrl = window.location.pathname.split('/'); 
    this.profileactivex=splitUrl[1];
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
