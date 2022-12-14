import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StoryComponent } from './story/story.component';
import { LoginComponent } from './login/login.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { ProfileComponent } from './profile/profile.component';
import { NotificationComponent } from './notification/notification.component';
import { WriteComponent } from './write/write.component';
import { YourstoryComponent } from './yourstory/yourstory.component';
import { SearchComponent } from './search/search.component';
import { TagComponent } from './tag/tag.component';
import { AuthGuard } from './helpers/auth.guard';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { UserComponent } from './user/user.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'story/:slug', component: StoryComponent,
     data: {
    title: 'Title for Home Component',
    descrption: 'Description of Home Component',
    ogTitle: 'Description of Home Component for social media',
          }
},
  { path: 'login', component: LoginComponent },
  { path: 'search', component: SearchComponent },
  { path: 'tag/:slug', component: TagComponent },
  {path: 'profile/:slug', component: ProfileComponent, canActivate: [AuthGuard],},
  {path: 'viewprofile/:slug', component: UserComponent, canActivate: [AuthGuard],},
  {path: 'bookmark', component: BookmarkComponent, canActivate: [AuthGuard],},
  {path: 'notification', component: NotificationComponent, canActivate: [AuthGuard],},
  {path: 'write', component: WriteComponent, canActivate: [AuthGuard],},
  {path: 'yourstory', component: YourstoryComponent, canActivate: [AuthGuard],},
  {path: 'editprofile', component: EditprofileComponent, canActivate: [AuthGuard],},
    // otherwise redirect to home
    { path: '**', redirectTo: 'home' },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
