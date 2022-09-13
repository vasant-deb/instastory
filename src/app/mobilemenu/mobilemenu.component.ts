import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobilemenu',
  templateUrl: './mobilemenu.component.html',
  styleUrls: ['./mobilemenu.component.css']
})
export class MobilemenuComponent implements OnInit {

  constructor() { }
  token=localStorage.getItem('token');
  ngOnInit(): void {
    this.token=this.token;
  }

}
