import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksService } from './books.service';
import { BooksComponent } from './books.component';
import { BookComponent } from './book/book.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [BooksComponent, BookComponent],
  providers: [BooksService],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [BooksComponent]
})
export class BooksModule { }
