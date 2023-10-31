import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PayService {

  constructor(private httpService: HttpClient) { }

  pay() {
    return this.httpService.post('/pay', null);
  }
}
