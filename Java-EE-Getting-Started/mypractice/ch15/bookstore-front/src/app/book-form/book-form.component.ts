import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../service/model/Book';
import 'rxjs/Rx';
import {BooksApi} from '../service/api/BooksApi';


@Component({
  selector: 'bs-book-form',
  templateUrl: './book-form.component.html',
  styles: []
})
export class BookFormComponent implements OnInit {

  book: Book = {};

  constructor(private router: Router, private bookService: BooksApi) { }

  ngOnInit() {
  }

  create() {
    this.bookService.createBook(this.book)
      .finally(() => this.router.navigate(['/book-list']))
      .subscribe();
  }
}
