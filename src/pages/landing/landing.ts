import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {DetailsPage} from "../details/details";
import {TranslateService} from '@ngx-translate/core';
import {AppSettingsService} from "../utils/app.setting";


@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {

  constructor(public navCtrl: NavController,
              private translate: TranslateService,
              private appSettingsService : AppSettingsService,
              public navParams: NavParams) {

    translate.get('HELLO', {value: 'world'}).subscribe((res: string) => {
      console.log(res);
      //=> 'hello world'
    });

  }

  ionViewDidLoad() {

  }


  goToDetailPage(item) {

    this.translate.setDefaultLang(item);
    this.translate.use(item);

    if(item ==='ur'){
      this.appSettingsService.sendMessage(true)
    }else{
      this.appSettingsService.sendMessage(false)
    }

    this.navCtrl.push(DetailsPage, {
      item: item
    });
  }

}
