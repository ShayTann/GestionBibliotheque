import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule} from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { SearchEditComponent } from './components/search-edit/search-edit.component';
import {LoginComponent } from './components/login/login.component';
import {BooksComponent} from './components/books/books.component';
import {HomeComponent} from './components/home/home.component';
import {EditComponent} from './components/edit/edit.component';
const routes : Routes = [
{path:"",redirectTo:"home",pathMatch:"full"},
  {path : "register",component:RegistrationComponent},
  {path : "search",component:SearchEditComponent},
  {path : "login",component:LoginComponent},
  {path : "books",component:BooksComponent},
  {path : "home",component:HomeComponent},
  {path : "edit",component:EditComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule],
})
export class AppRoutingModule { }
