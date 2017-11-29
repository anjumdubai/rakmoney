import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

import {AccountPage} from "../account/account";

@IonicPage()
@Component({
  selector: 'page-photo',
  templateUrl: 'photo.html',
})
export class PhotoPage {

  showContent1: boolean = true;
  showContent2: boolean = false;

  showImage1: boolean = true;
  showImage2: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }

  gotoPhoto(index) {
    this.showImage1 = false;
    this.showImage2 = false;

    if (index === 'showImage2') {
      this.showImage2 = true;
    }

  }

  goToPage(event, item) {
    event.preventDefault();
    this.navCtrl.push(AccountPage, {
      item: item
    });
  }

  takeNewPhoto() {
    event.preventDefault();
    this.showContent1 = true;
    this.showContent2 = false;

  }

  goBack() {
    this.navCtrl.pop();
  }

  showScanningFail() {
    this.showContent1 = false;
    this.showContent2 = true;
  }

  doNothing(event) {
    event.preventDefault();
  }

}
