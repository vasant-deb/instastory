import { Component, OnInit,OnDestroy } from '@angular/core';
import { AuthenticationService } from './../services/authentication.service';

@Component({
  selector: 'app-mobilemenu',
  templateUrl: './mobilemenu.component.html',
  styleUrls: ['./mobilemenu.component.css']
})
export class MobilemenuComponent {

  constructor(public account: AuthenticationService) { }


 

  token=localStorage.getItem('token');
 
  ngOnInit(): void {
   
    
  }
  viewmore(){
    alert("hello");
  }
}
