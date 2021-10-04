import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';

//https://www.youtube.com/watch?v=z83KBAoyNWw
//https://www.tektutorialshub.com/angular/angular-httpheaders/
//HTTP Headers allow you to pass on content and create instances of objects
//http headers can be passed through get, put, post, delete
// in total there are 7 methods for headers
const httpHeader = new HttpHeaders({'Content-Type': 'application/json'}); //create instance/define oheader
//can pass multiple options inside definition {}
@Injectable({

providedIn: "root"})

export class BookService {
  private apiURL = 'https://613d68c694dbd600172ab8c6.mockapi.io/';
 //any variable entered here can be imported into either app.component.ts or child.component.ts
  constructor(private http: HttpClient) { }

  getBooks() {

    return this.http.get<Book[]>(`${this.apiURL}books`);
  }

    saveBook(book) {

      return this.http.post<Book>(`${this.apiURL}books`, JSON.stringify(book), { headers: httpHeader });
      //passs in object
      //https://www.w3schools.com/jsref/jsref_stringify.asp
      //When sending data to a web server the data has to be a string.
    }
  
    removeBook(bookId) {
  
      return this.http.delete(`${this.apiURL}books/`+bookId.toString() )
      
 

  }

}