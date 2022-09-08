import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

    
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  posts:any;
  
  constructor(private api:ApiService) {}
  
  ngOnInit() {
      this.api.getPosts()
        .subscribe(response => {
          this.posts = response;
          console.log(this.posts);
        });
  }

}
