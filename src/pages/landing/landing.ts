import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {DetailsPage} from "../details/details";

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }


  goToDetailPage(event, item) {
    this.navCtrl.push(DetailsPage, {
      item: item
    });
  }

}
