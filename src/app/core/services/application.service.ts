import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NO_AUTH_CONTEXT } from '../interceptors/http.token.interceptor';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  constructor(private httpClient: HttpClient) {}

  guestPostApplication(body) {
    return this.httpClient.post(`/camunda/application/init`, body, NO_AUTH_CONTEXT);
  }
  postApplication(body) {
    return this.httpClient.post(`/camunda/application/init`, body);
  }

  editApplication(body) {
    return this.httpClient.post(`/camunda/application/edit`, body);
  }

  getApplications() {
    return this.httpClient.get(`/camunda/application/all`);
  }
}
