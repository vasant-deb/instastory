import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './../services/authentication.service';

@Component({
  selector: 'app-leftsidebar',
  templateUrl: './leftsidebar.component.html',
  styleUrls: ['./leftsidebar.component.css']
})
export class LeftsidebarComponent implements OnInit {
  

  constructor(public account: AuthenticationService,private route: ActivatedRoute,private router:Router) { }
 
  usertoken='';
 
  token=localStorage.getItem('token');

  routelink='';
  ngOnInit(): void {
   
  }
  
 

}
