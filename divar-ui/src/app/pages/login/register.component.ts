

import {Component, Injector, ViewEncapsulation} from '@angular/core';
import {
  TaminPageBaseComponent} from 'tamin-framework';
import {FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthenticationService } from 'src/app/components/service/AuthenticationService';
import { Urls } from 'src/settings/urls';
import { Router } from '@angular/router';





@Component({
  selector: 'app-action-report',
  templateUrl: './register.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends TaminPageBaseComponent {

  constructor(injector: Injector, private http: HttpClient,
    private router: Router,
    private authService: AuthenticationService) {
    super(injector);
  }


  private overlay: any;


  public theForm: FormGroup;


  protected initializePage() {

    this.theForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }


    login(){
        this.overlay = this.showOverlay();
     this.restService.create('http://localhost:8089/login',{
       'username':this.theForm.get('username').value,
       'password':this.theForm.get('password').value
      }
       ).then(val=>{
         localStorage.setItem('currentUser',val.token);
         this.authService.setUserLoggedInStatus(this.theForm.get('username').value);
         this.router.navigate(['addPost']);
       }).catch(err=>{
         alert(err);
       }).finally(() => {
            this.hideOverlay(this.overlay);
          });
    }

}
