import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {

  @Input()
  entity: Post;
  @Input()
  i: number;

  @Output()
  remove = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick(i: number) {
    this.remove.emit(i);
  }

}
