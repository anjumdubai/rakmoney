import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule, HttpClient} from '@angular/common/http';

import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import { CoolStorageModule } from 'angular2-cool-storage';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


import {MyDataService} from "../pages/utils/data";
import {AppSettingsService} from "../pages/utils/app.setting";




import {RakMoneyApp} from './app.component';
import {LandingPage} from "../pages/landing/landing";
import {DetailsPage} from "../pages/details/details";
import {EmiratesidPage} from "../pages/emiratesid/emiratesid";
import {PassportPage} from "../pages/passport/passport";
import {PhotoPage} from "../pages/photo/photo";
import {AccountPage} from "../pages/account/account";
import {ModalPage} from "../pages/modal/modal";


import {ComponentsModule} from "../components/components.module";



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
    HttpClientModule,
    ComponentsModule,
    CoolStorageModule,
    IonicModule.forRoot(RakMoneyApp),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    myPages
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MyDataService,
    AppSettingsService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
