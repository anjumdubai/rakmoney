import {BrowserModule} from '@angular/platform-browser';

import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import { CoolStorageModule } from 'angular2-cool-storage';



import {RakMoneyApp} from './app.component';
import {UiElements} from '../pages/ui-elements/ui-elements'
import {LandingPage} from "../pages/landing/landing";
import {DetailsPage} from "../pages/details/details";

import {EmiratesidPage} from "../pages/emiratesid/emiratesid";
import {PassportPage} from "../pages/passport/passport";
import {PhotoPage} from "../pages/photo/photo";
import {AccountPage} from "../pages/account/account";
import {ModalPage} from "../pages/modal/modal";

import {MyDataService} from "../pages/utils/data";

const myPages: any = [
  RakMoneyApp,
  LandingPage,
  DetailsPage,
  EmiratesidPage,
  PassportPage,
  PhotoPage,
  AccountPage,
  ModalPage
];


@NgModule({
  declarations: [
    myPages
  ],
  imports: [
    BrowserModule,
    CoolStorageModule,
    IonicModule.forRoot(RakMoneyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    myPages
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MyDataService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
