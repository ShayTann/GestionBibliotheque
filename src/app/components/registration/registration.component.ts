import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { TokenStorageService } from '../../services/token-storage.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService,private router: Router,private tokenStorage: TokenStorageService) {

   }
   
  onSubmit() {

    this.form.books="Books";

    this.authService.register(this.form).subscribe(
      data => {
        
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigate(['books']);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
  

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.router.navigate(['books']);
    }
  }

  
}
