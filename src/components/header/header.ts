import {Component, Input} from '@angular/core';
import {NavController} from "ionic-angular";


@Component({
  selector: 'header-component',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  _title = '';
  _activePage = null;
  _activeLive = null;


  @Input() set title(value){
    this._title = value
  }
  get title(){
    return this._title
  }

  @Input() set activePage(value){
    this._activePage = value
  }
  get activePage(){
    return this._activePage
  }

  @Input() set activeLive(value){
    this._activeLive = value
  }
  get activeLive(){
    return this._activeLive
  }


  constructor(public navCtrl: NavController,) {

  }


  goBack() {
    this.navCtrl.pop();
  }
}
