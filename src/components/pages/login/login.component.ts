import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoginComponent {
  username = '';
  password = '';
  loginError = false;

  constructor(private router: Router) {}

  onLogin() {
    // if (this.authService.login(this.username, this.password)) {
    //   this.router.navigate(['/dashboard']);
    // } else {
    //   this.loginError = true;
    // }
  }
}
