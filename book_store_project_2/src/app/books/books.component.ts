import { Component } from '@angular/core';
// http://localhost:63511/
interface Book{

  name: string;
  book: string;
  image: string;
  amount: string;
  
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent {

  books: Book[] = [

  {
  name: 'Grant Morrison',
  book:'Superman Action Comics 2',
  image: 'https://m.media-amazon.com/images/I/810IZGFxfFL._SL1200_.jpg',
  amount: '800',
  },
  {

  name: 'Jason Aaron',
  book: 'Free Comic Book Day 2019 (Avengers/Savage Avengers)',
  image:  'https://m.media-amazon.com/images/I/51Hs0LcWBbL._SY445_SX342_.jpg',
  amount: '1000',
  },

  {
    name: 'John Ridley',
    book:'Batman Special Edition (FCBD) #1: 2021',
    image: 'https://m.media-amazon.com/images/I/919sRIv9c7L._SL1500_.jpg',
    amount: '2000',
    },
    {
  
    name: 'Donny Cates',
    book: 'Free Comic Book Day 2020 (Spider-Man/Venom)',
    image:  'https://m.media-amazon.com/images/I/91BTZdo8jIL._SL1500_.jpg',
    amount: '1500',
    },
  
];
  
  isDisabled: boolean = false;

  myname: String = "";

  showIt(event: any){  // for tow way binding old

    this.myname = event.target.value;
  }

  // handleClick(){  alert('error....'); }

  // toggleFn(){

  //   this.isDisabled = ! this.isDisabled;
  // }

}