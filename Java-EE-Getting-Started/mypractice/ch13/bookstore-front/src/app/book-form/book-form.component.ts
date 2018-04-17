import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bs-book-form',
  templateUrl: './book-form.component.html',
  styles: []
})
export class BookFormComponent implements OnInit {

  book = {
    title: "dummy title 1",
    description: "dummy description 1",
    unitCost: "4444",
    isbn: "123-456-789",
    nbOfPages: "456",
    language: "English",
    imageURL: "https://images-na.ssl-images-amazon.com/images/I/41fSgGdWf4L.jpg"
  }

  constructor() { }

  ngOnInit() {
  }

}
