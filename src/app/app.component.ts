import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

import {timer} from 'rxjs';


import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'instastory1.1';
  constructor( public authen: AuthenticationService,private http: HttpClient,private router: Router,private route: ActivatedRoute) { }
  token=localStorage.getItem('token');
  
  
  viewnoti:any;
  noticount:any;
  newnoticount:any;
  ngOnInit(): void {
    
    
   timer(0, 1000).subscribe(() => {
        this.http.post<any>(environment.apiUrl + '/getnotification', {token: this.token}).subscribe(data => {
        this.viewnoti=data.stats;
        this.noticount=data.notcount;
        this.newnoticount=data.newnotifications;
       // this.playAudio(this.newnoticount);
      });
    })
   
  }
  playAudio(x:any){
    let audio = new Audio();
    audio.src = "https://beta.autoreport.space/storyapi/public/uploads/relax-message-tone.mp3";
    audio.load();
    audio.loop = false;

    if(x=="0"){
      this.http.post<any>(environment.apiUrl + '/updatenotification', {token: this.token}).subscribe(data => {
        
        audio.play();
      });
      
  }else{
      audio.pause();
  }
  }
  

}
