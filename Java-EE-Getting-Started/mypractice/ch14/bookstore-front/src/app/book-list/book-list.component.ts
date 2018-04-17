import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bs-book-list',
  templateUrl: './book-list.component.html',
  styles: []
})
export class BookListComponent implements OnInit {

  nbBooks: number = 2;
  books = [
    {
      id: "1",
      title: "dummy title 1",
      description: "dummy description 1",
      imageURL: "https://images-na.ssl-images-amazon.com/images/I/41fSgGdWf4L.jpg"
    },
    {
      id: "2",
      title: "dummy title 2",
      description: "dummy description 2",
      imageURL: "https://images-na.ssl-images-amazon.com/images/I/41fSgGdWf4L.jpg"
    }
    ]
  constructor() { }

  ngOnInit() {
  }

}
