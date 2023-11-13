import { Component } from '@angular/core';
import { TokenService } from '../token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(private tokenService: TokenService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  logout() {
    this.tokenService.removeToken();
    this.router.navigateByUrl('/login');
  }
}
