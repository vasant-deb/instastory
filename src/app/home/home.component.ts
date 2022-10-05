import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";

import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { AuthenticationService } from './../services/authentication.service';
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [3, 6, 9, 12];
  following: any;
  story: any;
  addusersx:any;
  token = localStorage.getItem("token");
  constructor(public account :AuthenticationService,private api: ApiService, private http: HttpClient) {}
  ngOnInit() {
    this.fetchPosts();
    this.fetchfollowing();
    this.addusers();
  }

  like(storyId: any, likestatus: any) {
    this.http
      .post<any>(environment.apiUrl + "/likeupdate", {
        token: this.token,
        slug: storyId,
        lstatus: likestatus,
      })
      .subscribe((data) => {
        this.fetchPosts();
        this.fetchfollowing();
      });
  }

  save(storyId: any, bookmarkstatus: any) {
    this.http
      .post<any>(environment.apiUrl + "/savebookmark", {
        token: this.token,
        story_id: storyId,
        bstatus: bookmarkstatus,
      })
      .subscribe((data) => {
        this.fetchPosts();
        this.fetchfollowing();
      });
  }

  fetchPosts(): void {
    if (this.token == "" || this.token === undefined || this.token === null) {
      this.api.getstory().subscribe((data: any) => {
        this.story = data.stats;
      });
    } else {
      this.http
        .post<any>(environment.apiUrl + "/homelogedin", { token: this.token })
        .subscribe((data) => {
          this.story = data.stats;
        });
    }
  }
  fetchfollowing(): void {
    if (this.token == "" || this.token === undefined || this.token === null) {

    }
    else{
    this.http
      .post<any>(environment.apiUrl + "/following", { token: this.token })
      .subscribe((data) => {
        this.following = data.stats;
      });
    }
  }
  addusers(): void {
    if (this.token == "" || this.token === undefined || this.token === null) {

    }
    else{
    this.http
      .post<any>(environment.apiUrl + "/addusers", { token: this.token })
      .subscribe((data) => {
        this.addusersx = data.stats;
      });
    }
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.fetchPosts();
  }
  onTableDataFChange(event: any) {
    this.page = event;
    this.fetchfollowing();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPosts();
    this.fetchfollowing();
  }
  follow(usertoken:any){
    this.http.post<any>(environment.apiUrl + '/followupdate', {token: this.token,usertoken:usertoken,followStatus:'Follow'}).subscribe(data => {

      this.addusers();
    
        });   
       
     }
}
