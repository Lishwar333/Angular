import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  constructor() { }

  getService(){

    return [

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
  }
}