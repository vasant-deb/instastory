import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LeftsidebarComponent } from './leftsidebar/leftsidebar.component';
import { HomeComponent } from './home/home.component';
import { RightsidebarComponent } from './rightsidebar/rightsidebar.component';
import { MobilemenuComponent } from './mobilemenu/mobilemenu.component';
import { HttpClientModule } from '@angular/common/http';
import { StoryComponent } from './story/story.component';
import { MaterialComponent } from './material/material.component';
import { ServicesComponent } from './services/services.component';
import { NgHttpLoaderModule } from 'ng-http-loader';

@NgModule({
  declarations: [
    AppComponent,
    LeftsidebarComponent,
    HomeComponent,
    RightsidebarComponent,
    MobilemenuComponent,
    StoryComponent,
    MaterialComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
