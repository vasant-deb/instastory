import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor (private http:HttpClient) {}


  rootURL = 'https://beta.autoreport.space/storyapi/public';

  getstory() {
    return this.http.get(this.rootURL + '/home');
  }
  getrecentstory() {
    return this.http.get(this.rootURL + '/rightsidebar');
  }
  private url = 'https://jsonplaceholder.typicode.com/posts';
  getPosts(){
    return this.http.get(this.url);
  }
  
 
}
