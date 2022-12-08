import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuiltInStrDirComponent } from './components/built-in-str-dir/built-in-str-dir.component';

const routes: Routes = [
  { path: 'home', component:  HomeComponent },
  { path: 'about', component:  AboutComponent },
  { path: 'str-dir', component:  BuiltInStrDirComponent },
  { path: 'blog', component:  BlogComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
