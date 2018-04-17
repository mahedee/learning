import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bs-book-detail',
  templateUrl: './book-detail.component.html',
  styles: []
})
export class BookDetailComponent implements OnInit {

  book = {
    title: "dummy title 1",
    description: "dummy description 1",
    unitCost: "4444",
    isbn: "123-456-789",
    nbOfPages: "456",
    language: "English"
  }

  constructor() { }

  ngOnInit() {
  }

}
