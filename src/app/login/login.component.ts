import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

    
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  story:any;
 
  constructor(private api:ApiService) {}
  ngOnInit() {
    
      this.api.getstory()
      .subscribe(response=> {
        
      this.story=response;
      this.story=this.story.stats;
  });
  }



}
