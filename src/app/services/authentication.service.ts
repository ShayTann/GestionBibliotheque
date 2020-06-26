import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  public status = false;
  constructor(private http: HttpClient) {
      //this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
      //this.currentUser = this.currentUserSubject.asObservable();
  }

  public getStatus(){
    return this.status;
  }
  public switchStatus(){
    this.status= !this.status;
  }
  public get currentUserValue(): User {
      return this.currentUserSubject.value;
  }

  public login(user){
    return this.http.post("http://localhost:8080/api/auth/signin",user,{responseType:'text' as 'json'})
  }

  public getUser(id){
    return this.http.get("http://localhost:8080/api/auth/findById/"+id);
  }
  

}
