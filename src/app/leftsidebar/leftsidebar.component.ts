import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leftsidebar',
  templateUrl: './leftsidebar.component.html',
  styleUrls: ['./leftsidebar.component.css']
})
export class LeftsidebarComponent implements OnInit {

  constructor() { }
  token=localStorage.getItem('token');
  ngOnInit(): void {
  }

}
