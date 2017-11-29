import {Component} from '@angular/core';
import {IonicPage,ModalController,ModalOptions, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


import {ModalPage} from "../modal/modal";

import zxcvbn from 'zxcvbn';
import {MyDataService} from "../utils/data";

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  showContent1: boolean = true;
  showContent2: boolean = false;
  showContent3: boolean = false;

  private user:any ={};
  private userData:any ={}

  DetailsOneForm: any = {};
  private meter;

  showMessage:boolean = false
  submitAttempt: boolean = false;
  stepCounter = 0;



  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public myDataService: MyDataService,
              public formBuilder: FormBuilder,
              public modalCtrl: ModalController) {

    this.getFormData();
  }


  ionViewDidLoad() {
    this.userData = this.myDataService.GetData('rootContext')
  }


  onMobileNumberBlur($event) {

    if(!$event){
      this.meter = null
    }else{
      this.meter = zxcvbn($event).score;
    }

  }

  passwordCheck($event){
    this.showMessage = true
    if (this.user.password1 === $event) {
      this.showMessage = false;
    }
  }

  goBack() {
    this.navCtrl.pop();
  }

  doNothing(event) {
    event.preventDefault();
  }


  openModal() {
    const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false,
      cssClass : 'myModal'
    };

    let modal = this.modalCtrl.create(ModalPage,{},myModalOptions);
    modal.present();
  }


  getFormData() {
    this.DetailsOneForm = this.formBuilder.group({
      password1: ['',
        Validators.compose([
          Validators.maxLength(30),
          Validators.minLength(8),
          Validators.required
        ])
      ],
      password2: ['',
        Validators.compose([
          Validators.maxLength(30),
          Validators.minLength(8),
          Validators.required
        ])
      ]
    });
  }


  createAccount() {
    if (!this.DetailsOneForm.valid) {
      this.submitAttempt = true;
    }
    else {
      this.submitAttempt = false;
      this.myDataService.SetDataWithKey('Account', this.DetailsOneForm.value);
      this.stepCounter += 1;

      if (this.stepCounter === 1) {
        this.showContent2 = true;
        this.showContent1 = false;
      }

    }


  }


}
