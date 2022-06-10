import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { RegisterComponent } from './pages/login/register.component';
import { RegisterPostCategory } from './pages/registerPost/categories/registerPostCategory.component';
import { RegisterPost } from './pages/registerPost/registerPost.component';


const routes: Routes = [

  {path: '', component: RegisterComponent},
  {path: 'addPost', component: RegisterPost},
  {path: 'addPostCategory', component: RegisterPostCategory}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
