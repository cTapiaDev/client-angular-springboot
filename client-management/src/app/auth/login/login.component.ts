import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/auth/login.service';
import { LoginRequest } from '../../services/auth/loginRequest';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginError:string = '';
  loginForm = this.formBuilder.group({
    username: ['ctapiadev', [Validators.required]],
    password: ['', Validators.required],
  })

  constructor( private formBuilder:FormBuilder, private router:Router, private loginService: LoginService ) {}

  get username() {
    return this.loginForm.controls.username;
  }

  get password() {
    return this.loginForm.controls.password;
  }

  login() {
    if(this.loginForm.valid) {
      this.loginService.login(this.loginForm.value as LoginRequest).subscribe({
        next: (userData) => {
          console.log(userData);
        },
        error: (errorData) => {
          console.log(errorData);
          this.loginError = errorData;
        },
        complete: () => {
          console.info('Login complet');
          this.router.navigateByUrl('/dashboard');
          this.loginForm.reset();
        }
      });
    } else {
      this.loginForm.markAllAsTouched();
      alert('Error al ingresar los datos');
    }
  }

}
