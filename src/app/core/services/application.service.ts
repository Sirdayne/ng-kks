import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  constructor(private httpClient: HttpClient) {}

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
