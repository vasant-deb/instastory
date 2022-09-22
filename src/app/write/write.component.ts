import { Component, OnInit, ViewChild  } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TagValidator } from './tag.validator';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css'],

})
export class WriteComponent implements OnInit {
  public mode: string = 'Markdown';
  itemsAsObjects = [{id: 0, name: 'Angular', readonly: true}, {id: 1, name: 'React'}];
  constructor(private http: HttpClient,private router: Router) { }
  data:any;
  viewuser:any;
  viewbookmarks:any;
  viewstory:any;
  imageSrc: string = '';
  titlex:any; 
  formdata:any;
  token=localStorage.getItem('token');
  email=localStorage.getItem('email');
  ngOnInit(): void {
    this.http.post<any>(environment.apiUrl + '/getprofile', {token: this.token, email: this.email}).subscribe(data => {
      this.viewuser=data.info;
  })
  let tokenx='';
   this.formdata = new FormGroup({ 
         titlex: new FormControl("Whats your title ?",[Validators.required, Validators.minLength(5)]),
         tagx: new FormControl("Science,Technology",[Validators.required, Validators.minLength(3), TagValidator.cannotContainSpace]),
         descriptionx:new FormControl("Hi there! this is the description for what i know and what i believe",[Validators.required, Validators.minLength(50)]),
         file: new FormControl('', [Validators.required]),
         fileSource: new FormControl('', [Validators.required]),
         tokenx: new FormControl(this.token),
      }); 
      
  }
 
  get f(){
    return this.formdata.controls;
  }
  onFileChange(event:any) {
    const reader = new FileReader();
         if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
           reader.onload = () => {
            this.imageSrc = reader.result as string;
              this.formdata.patchValue({
          fileSource: reader.result
        });
          };
        }
  }
     
  submit(){
  
    this.http.post(environment.apiUrl + '/write', this.formdata.value)
      .subscribe(res => {
     
        alert('Uploaded Successfully.');
      })
  }
  
}
