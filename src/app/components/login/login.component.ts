import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from "@angular/router"
import { AuthService } from '../../services/auth.service';
import { TokenStorageService } from '../../services/token-storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user : User = new User("","")
  infos : any;
  message : any;
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private service : AuthenticationService,private router:Router,private authService: AuthService, private tokenStorage: TokenStorageService) {
   }

    login(){
      this.authService.login(this.form).subscribe(
        data => {
          this.tokenStorage.saveToken(data.accessToken);
          this.tokenStorage.saveUser(data);
  
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.roles = this.tokenStorage.getUser().roles;
          window.location.reload();
        },
        err => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
        }
      );
    }
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      this.router.navigate(['books'])
    }
  }

}
