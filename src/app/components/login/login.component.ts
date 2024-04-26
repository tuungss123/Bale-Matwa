import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  showPassword: boolean = true;

  constructor(private router: Router) {}
  ngOnInit() {
    this.showPassword = false;
  }
  login() {
    if (this.username === 'admin' && this.password === 'jedtungsabbykisses') {
      this.router.navigate(['/names-admin']);
    }
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
