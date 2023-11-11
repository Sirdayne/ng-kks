import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  constructor(private router: Router,
              private tokenService: TokenService) {
  }

  ngOnInit(): void {
  }

  logout() {
    this.tokenService.removeToken();
    this.router.navigateByUrl('/login');
  }
}
