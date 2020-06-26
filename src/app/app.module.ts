
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './components/registration/registration.component';
import { SearchEditComponent } from './components/search-edit/search-edit.component';
import { ClientRegistrationService } from './services/client-registration.service';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { LoginsuccComponent } from './components/loginsucc/loginsucc.component';
import { BooksComponent } from './components/books/books.component';
import { HomeComponent } from './components/home/home.component';
import { EditComponent } from './components/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    SearchEditComponent,
    LoginComponent,
    LoginsuccComponent,
    BooksComponent,
    HomeComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    PdfViewerModule,
  ],
  providers: [ClientRegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
