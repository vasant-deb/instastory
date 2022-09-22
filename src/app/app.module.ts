import { NgModule } from '@angular/core';
import { BrowserModule, Meta  } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LeftsidebarComponent } from './leftsidebar/leftsidebar.component';
import { HomeComponent } from './home/home.component';
import { RightsidebarComponent } from './rightsidebar/rightsidebar.component';
import { MobilemenuComponent } from './mobilemenu/mobilemenu.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoryComponent } from './story/story.component';
//import { MaterialComponent } from './material/material.component';
//import { ServicesComponent } from './services/services.component';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { TokenInterceptor } from './helpers/token.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { NotificationComponent } from './notification/notification.component';
import { WriteComponent } from './write/write.component';
import { YourstoryComponent } from './yourstory/yourstory.component';
import { TagValidator } from './write/tag.validator';
import {AutosizeModule} from 'ngx-autosize';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { SearchComponent } from './search/search.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    LeftsidebarComponent,
    HomeComponent,
    RightsidebarComponent,
    MobilemenuComponent,
    StoryComponent,
    ProfileComponent,
   // MaterialComponent,
  //  ServicesComponent,
    LoginComponent,
   BookmarkComponent,
   NotificationComponent,
   WriteComponent,
   YourstoryComponent,
   EditprofileComponent,
   SearchComponent
  ],
  imports: [
    Ng2SearchPipeModule,
    AutosizeModule,
    MatRadioModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
  ],
  providers: [Meta,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
