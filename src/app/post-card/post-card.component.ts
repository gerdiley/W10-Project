import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/post.interface';
import { MaiuscoloPipe } from '../pipes/maiuscolo.pipe';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

  @Input() p!:Post;


  constructor() { }

  ngOnInit(): void {
  }

}
