import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './modules/post/post.component';
import { PostDetailComponent } from './modules/post/components/post-detail/post-detail.component';
import { RegisterComponent } from './modules/user/components/register/register.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/posts',
    pathMatch: 'full',
  },
  {
    path: 'posts',
    component: PostComponent,
  },
  {
    path: 'posts/:id',
    component: PostDetailComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
