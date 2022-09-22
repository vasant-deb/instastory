import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  constructor(private http: HttpClient,private router: Router,private route: ActivatedRoute) { }
  data:any;
  viewuser:any;
  viewbookmarks:any;
  viewstory:any;
  imageSrc: string = '';
  firstname:any; 
  usertoken='';
  image:any;
  formdata:any;
  token=localStorage.getItem('token');
  email=localStorage.getItem('email');
  ngOnInit(): void {
       this.http.post<any>(environment.apiUrl + '/getprofile', {token: this.token, email: this.email,usertoken:this.usertoken}).subscribe(data => {
      this.viewuser=data.info;
 
      let tokenx='';
      this.formdata = new FormGroup({ 
            firstname: new FormControl(this.viewuser.first_name,[Validators.required, Validators.minLength(3)]),
            lastname: new FormControl(this.viewuser.last_name),
            bio:new FormControl(this.viewuser.bio,[Validators.required, Validators.minLength(10)]),
            file: new FormControl(''),
            fileSource: new FormControl(''),
            country: new FormControl(this.viewuser.country, [Validators.required, Validators.minLength(4)]),
            state: new FormControl(this.viewuser.state, [Validators.required, Validators.minLength(4)]),
            tokenx: new FormControl(this.token),
         }); 
 
    })

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
    this.http.post(environment.apiUrl + '/editprofile', this.formdata.value)
      .subscribe(res => {
     
        alert('Uploaded Successfully.');
      })
  }

}
