import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TokenService } from './components/token.service';
import { AuthService } from './components/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService,
              private tokenService: TokenService) {
  }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.validateCurrentUser();
    }
  }

  validateCurrentUser() {
    this.authService.validateCurrentUser().subscribe((res: any) => {
      if (res && res.token) {
        this.tokenService.setToken(res.token);
        this.authService.setCurrentUser(res);
      }
    }, err => {
      this.tokenService.removeToken();
    });
  }
}
