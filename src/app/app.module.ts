import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostAttiviComponent } from './post-attivi/post-attivi.component';
import { PostInattiviComponent } from './post-inattivi/post-inattivi.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostCardComponent } from './post-card/post-card.component';
import { MaiuscoloPipe } from './pipes/maiuscolo.pipe';
import { HightlightDirective } from './directives/hightlight.directive';
import { PostComponent } from './post/post.component';
import { UsersComponent } from './users/users.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

const Routes: Route[] = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "post",
    component: PostComponent,
  },
  {
    path: "active-posts",
    component: PostAttiviComponent
  },
  {
    path: "inactive-posts",
    component: PostInattiviComponent
  },
  {
    path: "active-posts/:id",
    component: PostDetailComponent
  },
  {
    path: "inactive-posts/:id",
    component: PostDetailComponent
  },
  {
    path: "users",
    component: UsersComponent,
    children: [
      {
        path: ":id",
        component: UsersDetailComponent
      }
    ]
  },
  // {
  //   path: "**",
  //   redirectTo: ""
  // }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostAttiviComponent,
    PostInattiviComponent,
    NavbarComponent,
    PostCardComponent,
    MaiuscoloPipe,
    HightlightDirective,
    UsersComponent,
    UsersDetailComponent,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(Routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

