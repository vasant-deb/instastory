import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StoryComponent } from './story/story.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'story/:slug', component: StoryComponent },
  { path: 'login', component: LoginComponent },
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard],},
    // otherwise redirect to home
    { path: '**', redirectTo: 'home' },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
