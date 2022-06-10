import { HttpClient } from "@angular/common/http";
import { Injector, Output } from "@angular/core";
import { Router } from "@angular/router";
import { EventEmitter } from "events";
import { Observable, ReplaySubject } from "rxjs";
import { catchError } from "rxjs/operators";
import { TaminPageBaseComponent } from "tamin-framework";

export class AuthenticationService {

  @Output() loggedInUser: ReplaySubject<any>;

  constructor(private router:Router)
    {
        this.loggedInUser = new ReplaySubject<any>(1);
    }



  getUserLoggedInStatus(): Observable<any> {
    return this.loggedInUser.asObservable();
  }

  setUserLoggedInStatus(message: any) {
    this.loggedInUser.next(message);
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.setUserLoggedInStatus('');
    this.router.navigate(['']);
  }
}
