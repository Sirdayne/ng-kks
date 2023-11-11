import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user;

  constructor(private httpService: HttpClient) { }

  encodeToBase64(login, password) {
    return btoa(login + '/' + password);
  }

  validateCurrentUser() {
    return this.httpService.get('/current_user');
  }

  setCurrentUser(user) {
    this.user = user;
  }

  isUserPaidChatGPT() {
    return this.user?.paid;
  }

  login(body) {
    return this.httpService.post('/login', body);
  }

  register(body) {
    return this.httpService.post('/register', body);
  }

  resetPassword(body) {
    return this.httpService.post('/reset', body);
  }

  logout() {
    return this.httpService.post('/logout', null);
  }
}
