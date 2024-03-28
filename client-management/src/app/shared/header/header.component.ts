import { Component, OnDestroy } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { environment } from '../../../environments/environment.development';
import { User } from '../../services/auth/user';
import { LoginService } from '../../services/auth/login.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnDestroy {
  userLoginOn:boolean = false;
  user?: User;
  errorMessage: String = "";

  constructor( private loginService: LoginService, private userService: UserService) {
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
  }

}
