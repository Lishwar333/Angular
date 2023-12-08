import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../Type/Book';

@Injectable()
export class BooksService {

  constructor(private httpClient: HttpClient) { }

  private baseURL = "http://localhost:8082/AllBooks";

  getService(){

    return this.httpClient.get<Book[]>(`${this.baseURL}`);

  }
}