import { Router } from '@angular/router';
import { OnInit, Injector, Component, ViewEncapsulation } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthenticationService } from "src/app/components/service/AuthenticationService";


@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false;
  subscription: Subscription;
  emitterService: any;
  userName: any;

  constructor(private authenticationService: AuthenticationService,
  private router:Router) {
  }

  ngOnInit() {
    this.authenticationService.getUserLoggedInStatus()
      .subscribe((customObject) => {
        this.userName = customObject;
      });
  }

  login() {
    if(!this.userName || this.userName.length===0)
       this.router.navigate(['']);
  }

  logout() {
    this.authenticationService.logout();
  }
}
