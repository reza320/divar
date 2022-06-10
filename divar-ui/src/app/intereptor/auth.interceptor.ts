
import { HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { EMPTY, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthenticationService } from '../components/service/AuthenticationService';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthenticationService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let accessToken = localStorage.getItem("currentUser");

    if(accessToken){
        request = request.clone({
        setHeaders: {
            Authorization: `Bearer ${accessToken}`
        }
        });

    }

    return next.handle(request).pipe(
      catchError(err => {
        if (err instanceof HttpErrorResponse && !request.url.includes('request/createUser') && err.status === 401) {
          this.auth.logout();
          return throwError('اعتبار نام کاربری شما به پایان رسیده است. لطفا مجددا وارد شوید');
        }
        
        return throwError(err.error);
      })
    )
  }


}


