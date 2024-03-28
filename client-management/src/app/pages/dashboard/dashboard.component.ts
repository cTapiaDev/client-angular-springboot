import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from '../../services/auth/login.service';
import { User } from '../../services/auth/user';
import { UserService } from '../../services/user/user.service';
import { environment } from '../../../environments/environment';
import { HeaderComponent } from "../../shared/header/header.component";
import { HomeComponent } from '../home/home.component';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [HeaderComponent, HomeComponent]
})
export class DashboardComponent implements OnInit, OnDestroy {

  userLoginOn:boolean = false;
  errorMessage: String = "";
  user?: User;

  constructor( private loginService: LoginService, private userService: UserService ) {
    this.userService.getUser(environment.userId).subscribe({
      next: (userData) => {
        this.user = userData;
      },
      error: (errorData) => {
        this.errorMessage = errorData;
      },
      complete: () => {
        console.info("User Data OK");
      }
    })
  }

  ngOnDestroy(): void {
    this.loginService.currentUserData.unsubscribe();
    this.loginService.currentUserLoginOn.unsubscribe();
  }

  ngOnInit(): void {
    this.loginService.currentUserLoginOn.subscribe({
      next: (userLoginOn) => {
        this.userLoginOn = userLoginOn;
      }
    });
  }

}
