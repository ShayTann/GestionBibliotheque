import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientRegistrationService {

  constructor(private http: HttpClient) { }

  public Register(user){
    return this.http.post("http://localhost:8080/api/auth/signup",user,{responseType:'text' as 'json'})
  }
}
