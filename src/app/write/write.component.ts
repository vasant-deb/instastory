import { Component, OnInit, ViewChild  } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RichTextEditorComponent, ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css'],
  providers: [RichTextEditorComponent,ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService]

})
export class WriteComponent implements OnInit {
  title = 'angular-richtexteditor';
  public mode: string = 'Markdown';
  @ViewChild('exampleRTE')
  public componentObject! : RichTextEditorComponent;
  private buttonElement! : HTMLElement | null;
  private htmlContent! : string;

  getFormattedContent() {
    this.buttonElement = document.getElementById('button');
    this.htmlContent = this.componentObject.getHtml();
  }

  public customToolbar: Object ={
    items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
            'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
            'LowerCase', 'UpperCase','SuperScript', 'SubScript', '|',
            'Formats', 'Alignments', 'NumberFormatList', 'BulletFormatList',
            'Outdent', 'Indent', '|',
            'CreateTable', 'CreateLink', 'Image', 'FileManager', '|', 'ClearFormat', 'Print',
            'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
  };
  constructor(private http: HttpClient,private router: Router) { }

  data:any;
  viewuser:any;
  viewbookmarks:any;
  viewstory:any;
  
  
  token=localStorage.getItem('token');
  email=localStorage.getItem('email');
  ngOnInit(): void {
    this.http.post<any>(environment.apiUrl + '/getprofile', {token: this.token, email: this.email}).subscribe(data => {
      this.viewuser=data.info;
  })

  }

}
