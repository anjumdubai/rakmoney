import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {LandingPage} from "../pages/landing/landing";

import {EmiratesidPage} from "../pages/emiratesid/emiratesid";

import {PassportPage} from "../pages/passport/passport";
import {AccountPage} from "../pages/account/account";



@Component({
  templateUrl: 'app.html'
})
export class RakMoneyApp {
  rootPage:any = AccountPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

