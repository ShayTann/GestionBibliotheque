import { Injectable } from '@angular/core';
import {Book} from '../book';

import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FilterBooksService {

  all_books : any[];
  

  constructor(private http: HttpClient) { 
    
  }
  public getAll(){
    return this.http.get("http://localhost:8080/api/books/findAll");
    
  }
  public getFiltred(name:String){
    return this.http.get("http://localhost:8080/api/books/search/"+name);
  }
  public updateBook(book){
    console.log(book);
    return this.http.post("http://localhost:8080/api/books/editBook",book,{responseType:'text' as 'json'})
  }
  public delBook(id){
    return this.http.get("http://localhost:8080/api/books/del/"+id);
  }

}