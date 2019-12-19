import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  constructor() {}
  title = `Post`;
  entities = [
    { title: 'title1', created: '2020-12-12' },
    { title: 'title2', created: '2020-12-12' },
    { title: 'title3', created: '2020-12-12' },
    { title: 'title4', created: '2020-12-12' },
  ];
  ngOnInit() {}

  removeHandle(index) {
    this.entities = this.entities.filter((item, i) => i !== index);
  }
}
