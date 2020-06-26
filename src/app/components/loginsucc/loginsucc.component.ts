import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginsucc',
  templateUrl: './loginsucc.component.html',
  styleUrls: ['./loginsucc.component.scss']
})
export class LoginsuccComponent implements OnInit {
  public books : any;
  constructor() { }


  public setbooks(filtredBooks : any){
    this.books = filtredBooks;
    console.log(this.books);
  }
  ngOnInit(): void {
  }

}
