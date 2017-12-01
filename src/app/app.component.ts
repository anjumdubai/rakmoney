import {AfterViewInit, Component, OnDestroy} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Subscription} from 'rxjs/Subscription'

import {LandingPage} from "../pages/landing/landing";
import {PassportPage} from "../pages/passport/passport";
import {EmiratesidPage} from "../pages/emiratesid/emiratesid";
import {TranslateService} from "@ngx-translate/core";
import {AppSettingsService} from "../pages/utils/app.setting";


@Component({
  templateUrl: 'app.html'
})
export class RakMoneyApp implements OnDestroy, AfterViewInit {
  rootPage: any = LandingPage;

  items: any;
  subscription: Subscription;

  constructor(public platform: Platform,
              private translate: TranslateService,
              statusBar: StatusBar,
              private appSettingService: AppSettingsService,
              splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

    });

    translate.setDefaultLang('en');
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');

  }

  ngAfterViewInit() {
    this.subscription = this.appSettingService.getMessage().subscribe(msg => {
      if (msg) {
        this.platform.setDir('rtl', msg);
      } else {
        this.platform.setDir('ltr', true);
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

