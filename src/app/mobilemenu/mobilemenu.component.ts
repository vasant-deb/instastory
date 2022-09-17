import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobilemenu',
  templateUrl: './mobilemenu.component.html',
  styleUrls: ['./mobilemenu.component.css']
})
export class MobilemenuComponent implements OnInit {

  constructor() { }
  token=localStorage.getItem('token');
  navmenu='';
  navmenut='';
  ngOnInit(): void {
    this.token=this.token;
    if(this.token==null||this.token==undefined||this.token==""){
      this.navmenu="login";
      this.navmenut="Login";
    }else{
      this.navmenu="profile";
      this.navmenut="Profile";
    }
  }

}
