import { Component, OnInit } from '@angular/core';
import {FilterBooksService} from '../../services/filter-books.service';
import{Book} from '../../book';
import {TokenStorageService}from '../../services/token-storage.service';
import {Router} from "@angular/router"
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  books : any;
  isLoggedIn = false;
  isAdmin = false;
  private roles: string[];
  show = false;
  fetchbook: Book;
  msg: any;
  deleteme: any;
  constructor(private service : FilterBooksService,private tokenStorageService : TokenStorageService, private router : Router) {

    this.service.getAll().subscribe((data)=> { this.books = data;
      
     
   })
   this.isLoggedIn = !!this.tokenStorageService.getToken();
   if (this.isLoggedIn){
    const user = this.tokenStorageService.getUser();
    this.roles = user.roles
    this.isAdmin = this.roles.includes('ROLE_ADMIN');
    console.log(this.isAdmin);
    if (!this.isAdmin){
      this.router.navigate(['books']);
    }
  }
  else{
    this.router.navigate(['books']);
  }
  }
  onChange(deviceValue){
    this.show = true;
    for (let entry of this.books){
      if (entry.name == deviceValue){
        this.fetchbook = entry;
      }
    }
    
  }
  update(){
    console.log(this.fetchbook);
    return this.service.updateBook(this.fetchbook);

  }
  getBook(deviceValue){
    this.deleteme = deviceValue;
  }
  deleteBook(){
    
    this.msg=this.service.delBook(this.deleteme);
  }
  ngOnInit(): void {
  }

}
