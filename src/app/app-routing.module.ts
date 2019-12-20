import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './modules/post/post.component';
import { PostDetailComponent } from './modules/post/components/post-detail/post-detail.component';


const routes: Routes = [
  {
    path: 'posts',
    component: PostComponent,
  }, {
    path: 'posts/:id',
    component: PostDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
