import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor (private http:HttpClient) {}


  rootURL = 'https://checklistforme.online/storyapi/public';

  getstory() {
    return this.http.get(this.rootURL + '/home');
  }
  getrecentstory() {
    return this.http.get(this.rootURL + '/rightsidebar');
  }
  gettrendingstory(){
    return this.http.get(this.rootURL + '/trending');
  }
  getauthor(){
    return this.http.get(this.rootURL + '/getauthor');
  }
  
 
}
