import { AuthenticationService } from './components/service/AuthenticationService';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './user/user.component';
import { ButtonComponent } from './button/button.component';
import { PageBodyComponent } from './page-body/page-body.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './components/app/app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  AuthInterceptorService,
  CallbackPipe,
  GenericRestService,
  ITaminApplicationConfig,
  OverlayService,
  PersianDateTimePipe,
  PersianNumberPipe,
  TaminFrameworkModule,
  TaminLazyLoadService,
  TaminRestService,
  TaminSecurityService
} from 'tamin-framework';
import {DeviceDetectorModule} from 'ngx-device-detector';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {environment} from '../environments/environment';
import { PageGuidanceItemComponent } from './page-guidance-item/page-guidance-item.component';
import { PageGuidanceMobileItemComponent } from './page-guidance-mobile-item/page-guidance-mobile-item.component';
import { PageLayoutComponent } from './page-layout/page-layout.component';
import { PageGuidanceMobileComponent } from './page-guidance-mobile/page-guidance-mobile.component';
import { PageGuidanceComponent } from './page-guidance/page-guidance.component';
import { AuthInterceptor } from './intereptor/auth.interceptor';
import { RegisterComponent } from './pages/login/register.component';
import { RegisterPost } from './pages/registerPost/registerPost.component';
import { RegisterPostCategory } from './pages/registerPost/categories/registerPostCategory.component';

declare var alertify: any;

alertify.defaults = {
  autoReset: true,
  basic: false,
  closable: true,
  closableByDimmer: true,
  invokeOnCloseOff: false,
  frameless: false,
  defaultFocusOff: false,
  maintainFocus: true,
  maximizable: true,
  modal: true,
  movable: true,
  moveBounded: false,
  overflow: true,
  padding: true,
  pinnable: true,
  pinned: true,
  preventBodyShift: false,
  resizable: true,
  startMaximized: false,
  transition: 'zoom',
  transitionOff: false,
  tabbable: 'button:not(:disabled):not(.ajs-reset),[href]:not(:disabled):not(.ajs-reset),input:not(:disabled):not(.ajs-reset),select:not(:disabled):not(.ajs-reset),textarea:not(:disabled):not(.ajs-reset),[tabindex]:not([tabindex^="-"]):not(:disabled):not(.ajs-reset)',

  notifier: {
    delay: 5,
    position: 'bottom-right',
    closeButton: false,
    classes: {
      base: 'alertify-notifier',
      prefix: 'ajs-',
      message: 'ajs-message',
      top: 'ajs-top',
      right: 'ajs-right',
      bottom: 'ajs-bottom',
      left: 'ajs-left',
      center: 'ajs-center',
      visible: 'ajs-visible',
      hidden: 'ajs-hidden',
      close: 'ajs-close'
    }
  },
  glossary: {
    title: 'توجه',
    ok: 'تایید',
    cancel: 'انصراف'
  },

  // theme settings
  theme: {
    input: 'ajs-input',
    ok: 'ajs-ok',
    cancel: 'ajs-cancel'
  },
  hooks: {
    preinit(instance) {
    },
    postinit(instance) {
    },
  },
};

export const AppConfig: ITaminApplicationConfig = {
  accessToken: environment.accessToken,
  expiresIn: environment.expiresIn,
  redirectUrl: environment.redirectUrl,
  baseUrl: environment.baseurl,
  authenticationEndpoint: environment.authenticationEndpoint,
  verifyEndpoint: environment.verifyEndpoint,
  logoutUrl: environment.logoutUrl,
  responseType: environment.responseType,
  clientId: environment.clientId,
  getUserNameUrl: environment.getUserNameUrl,
  restTimeout: environment.restTimeout,
  secureCookie: false,
  cacheableUrls: [
    'assets/data/menu-data.json'
  ]
};

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    RegisterComponent,
    PageLayoutComponent,
    PageBodyComponent,

    PageGuidanceComponent,
    PageGuidanceItemComponent,
    PageGuidanceMobileComponent,
    PageGuidanceMobileItemComponent,
    ButtonComponent,
    UserComponent,
    HeaderComponent,
    RegisterPost,
    RegisterPostCategory
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    TaminFrameworkModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    DeviceDetectorModule.forRoot()
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide: 'taminApplicationConfig', useValue: AppConfig},
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptorService,
    //   multi: true
    // },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    GenericRestService,
    TaminLazyLoadService,
    TaminSecurityService,
    TaminRestService,
    PersianDateTimePipe,
    PersianNumberPipe,
    CallbackPipe,
    OverlayService,
    CookieService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
