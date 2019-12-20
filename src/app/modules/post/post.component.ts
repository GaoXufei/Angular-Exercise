import { Component, OnInit } from '@angular/core';
import { Post } from './models/post.model';
import { postData } from './posts';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  title = `Post`;
  entities: Post[];

  constructor(
    private readonly postService: PostService,
  ) {
    this.entities = this.postService.findAll();
  }

  ngOnInit() {}

  removeHandle(index) {
    this.entities = this.entities.filter((item, i) => i !== index);
  }
}
