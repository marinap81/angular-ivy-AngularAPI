import { Component, OnInit, VERSION } from '@angular/core';
import { Book } from './models/book.model';
import { BookService } from './services/book.service';

@Component({
  selector: 'my-app',
  //selector: 'my-app: json-pipe',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  constructor(private bookService: BookService){}//declaring service by adding to constructor
  //name = 'marina';

  selectbook: Book = { title:"", releaseDate:"", haveRead:false, rating:null};
  books: Book[] = [];



  ngOnInit(): void{
    //subscribe is listening for event below
    //subscribe is an observable ie event listener and
      //is listenint for when data occurs. this process is an a synchronous function.. doesnt run choronlogically
      this.getBooks();
  }

  
   getBooks(){

    this.bookService.getBooks().subscribe((data) => { 
      this.books = data; //assigning data from api

    console.log(this.books);
    
    //console.log('getting data')
    //while grabbbing data, angular can do other stuff ie can still console.log
    //if you were writing out console.log('finish loading') this should be inside the subscription not outside it


    });
  }
  saveBook() {

   
      this.bookService.saveBook(this.selectbook).subscribe((data) => {
        console.log(data);
        // reload books
        this.getBooks();
      });
    
    
  }

  removeBook(id) {

      this.bookService.removeBook(id).subscribe((data) => {
        console.log('Received after remove: ', data);
        // reload books
        this.getBooks();
      });



  }
}
