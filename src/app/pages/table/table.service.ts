import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  constructor(private httpClient: HttpClient) {}

  getRecords() {
    return this.httpClient.get(`https://jsonplaceholder.typicode.com/todos`);
  }

  downloadPDF(id) {
    return this.httpClient.get(`/report/${id}`, { responseType: 'blob' });
  }
}
