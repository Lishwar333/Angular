import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  name1: String = 'Grant Morrison';
  book1: String = 'Superman Action Comics 2';
  src1: String = 'https://m.media-amazon.com/images/I/810IZGFxfFL._SL1200_.jpg';

  name2: String = 'Donny Cates';
  book2: String = 'Free Comic Book Day 2020 (Spider-Man/Venom)';
  src2: String = 'https://m.media-amazon.com/images/I/91BTZdo8jIL._SL1500_.jpg';

  isDisabled: boolean = false;
}
