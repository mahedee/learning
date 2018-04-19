import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule} from '@angular/http';

import { FormsModule } from '@angular/forms'; // added for ngModel


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookFormComponent } from './book-form/book-form.component';
import {BooksApi} from './service/api/BooksApi';



@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookDetailComponent,
    BookFormComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule // added for ngModel
  ],
  providers: [BooksApi],
  bootstrap: [AppComponent]
})
export class AppModule { }
