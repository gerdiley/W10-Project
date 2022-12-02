import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.interface';
import { PostService } from '../services/get-post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  posts: Post[] = []
  currentPost!: Post;
  id!: number;

  // url = window.location.href


  constructor(private postSrv: PostService, private router: ActivatedRoute) {

  }

  ngOnInit(): void {

    this.router.params.subscribe(params => {
      this.id = +params['id'];
      this.getPost()
    })
  }
  getPost(): void {
    let postok: Post;
    this.postSrv.posts.forEach((e: Post) => {
      if(e.id == this.id) this.currentPost = e;
    })
  }
}







