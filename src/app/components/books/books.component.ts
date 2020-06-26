import { Component, OnInit } from '@angular/core';
import {FilterBooksService} from '../../services/filter-books.service';
import { AuthService } from '../../services/auth.service';
import { Injectable } from '@angular/core';
import { TokenStorageService } from '../../services/token-storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
@Injectable({
  providedIn: 'root',
})
export class BooksComponent implements OnInit {
  public books : any;
  public filtredBooks: any;
  private roles: string[];
  isLoggedIn = false;
  isAdmin = false;
  public userBooks : any;
  public tmpname : String;
  msg : any;
  deleteme: any;
  message = "Certains Livres ne sont pas gratuites il faut donc se connecter et avoir le livre pour accéder .";

  constructor(private service : FilterBooksService,private service2:AuthService ,private tokenStorage: TokenStorageService,private router:Router) {
    this.service.getAll().subscribe((data)=> {this.books = data;
      this.filtredBooks= data;
  })
  this.isLoggedIn = !!this.tokenStorage.getToken();
   if (this.isLoggedIn){
     const user = this.tokenStorage.getUser();
     this.roles = user.roles
     this.isAdmin = this.roles.includes('ROLE_ADMIN');
   }
 


  
}
  public redirect(url){
    window.location.href=url;
  }

  public checkBook(bookName : String,booklink : String){
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.service2.getBooks(this.tokenStorage.getUser().id).subscribe((data)=>{
        this.userBooks = Object.values(data)[6];
        console.log(this.userBooks);
      });
      if (this.userBooks.includes(bookName)){
        this.redirect(booklink);
      }
      else{
        let element = document.getElementById('message');
        element.className = 'text-danger msg';
        this.message = "Vous ne posseder pas ce livre ."
      }
     
    }
    else{
      this.router.navigate(['login'])
    }
  }

  public setBooks(){
    console.log(this.tmpname)
    if (this.tmpname==null){
      this.filtredBooks = this.books;
    }
    else{
    this.service.getFiltred(this.tmpname).subscribe((data)=> {
      this.filtredBooks= data;
  })
  this.tmpname=null;
}

  }
  getBook(deviceValue){
    this.deleteme = deviceValue;
    console.log(this.deleteme);
  }
  deleteBook(){
    
    this.msg=this.service.delBook(this.deleteme);
  }

  ngOnInit(): void {
    
  
  }

}
