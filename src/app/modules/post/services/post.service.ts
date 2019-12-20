import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { postData } from '../posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  entities: Post[];
  constructor() {
    this.entities = postData;
  }
  /**
   * 获取全部文章
   */
  findAll() {
    return this.entities;
  }

  /**
   * 获取指定id的文章数据
   * @param id 文章id
   */
  findOneById(id: number) {
    return this.entities.find(post => post.id === id);
  }
}
