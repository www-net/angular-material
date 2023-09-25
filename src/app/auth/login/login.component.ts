import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router){}

isLoading: boolean = false;


login(){
  this.isLoading = true;
  setTimeout(() => {
    this.router.navigate(['/']);
  }, 2000)
}
}
