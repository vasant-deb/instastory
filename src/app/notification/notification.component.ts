import { Component, OnInit } from '@angular/core';
import {timer} from 'rxjs';


import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor(private http: HttpClient,private router: Router,private route: ActivatedRoute) { }
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
     //   this.playAudio(this.newnoticount);
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
