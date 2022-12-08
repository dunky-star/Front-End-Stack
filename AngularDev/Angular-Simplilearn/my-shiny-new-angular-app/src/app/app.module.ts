import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransformDirective } from './transform.directive';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteListItemComponent } from './note-list-item/note-list-item.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { HeaderComponent } from './header/header.component';
import { BuiltInStrDirComponent } from './components/built-in-str-dir/built-in-str-dir.component';



@NgModule({
  declarations: [
    AppComponent,
    TransformDirective,
    NoteListComponent,
    NoteListItemComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    HeaderComponent,
    BuiltInStrDirComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,

  ],
  exports: [],
  entryComponents: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
