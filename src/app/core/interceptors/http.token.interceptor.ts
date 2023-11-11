import { Injectable, Injector } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse, HttpContextToken, HttpContext
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { TokenService } from '../../components/token.service';

const NO_AUTH = new HttpContextToken<boolean>(() => false);
export const NO_AUTH_CONTEXT = { context: new HttpContext().set(NO_AUTH, true) };

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor(private inj: Injector,
              private tokenService: TokenService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.needToModify(req.url)) {
      return next.handle(req);
    }

    const headersConfig = {};
    const accessToken = req.context.get(NO_AUTH) ? null : this.tokenService.getToken();
    if (accessToken) {
      headersConfig['Authorization'] = `Basic ${accessToken}`;
    }

    const request = req.clone({
      url: this.getModifiedUrl(req.url),
      setHeaders: headersConfig
    });

    return next.handle(request);
  }

  getModifiedUrl(requestUrl): string {
    if (requestUrl && (requestUrl.includes('http://') || requestUrl.includes('https://'))) {
      return requestUrl;
    }
    return environment.apiEndpoint + requestUrl;
  }

  needToModify(url) {
    return !url.includes(environment.apiEndpoint);
  }
}
