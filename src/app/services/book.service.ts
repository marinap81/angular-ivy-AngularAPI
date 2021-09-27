import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
//import { HttpClient } from '@angular/common/http';

@Injectable({

providedIn: "root"})

export class BookService {
  private apiURL = 'https://613d68c694dbd600172ab8c6.mockapi.io/';
 //any variable entered here can be imported into either app.component.ts or child.component.ts
  constructor(private http: HttpClient) { }

  getBooks() {

    return this.http.get<Book[]>(`${this.apiURL}books`);

  }

}