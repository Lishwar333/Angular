import { Component, OnInit } from '@angular/core';
import { Book } from '../Type/Book';
import { BooksService } from './books.service';
// http://localhost:63511/

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit {

  constructor(private booksService: BooksService){

  }

  ngOnInit(): void {
    this.books = this.booksService.getService();
  }

  books: Book[] = [];
  
cart: Book[] =[];

addToCart(book:Book){

  console.log(book);

}

  isDisabled: boolean = true;
  myname: String = "";
  showIt(event: any){  // for tow way binding old

    this.myname = event.target.value;
  }

}