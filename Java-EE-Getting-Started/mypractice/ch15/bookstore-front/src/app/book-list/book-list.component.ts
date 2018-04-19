import { Component, OnInit } from '@angular/core';
import {BooksApi} from "../service/api/BooksApi";

@Component({
  selector: 'bs-book-list',
  templateUrl: './book-list.component.html',
  styles: []
})
export class BookListComponent implements OnInit {

  nbBooks: number;
  books = []
  constructor(private bookService: BooksApi) { }

  ngOnInit() {
    this.bookService.countBooks().subscribe(nbBooks => this.nbBooks = nbBooks);
    this.bookService.getBooks().subscribe(books => this.books = books);
  }

}
