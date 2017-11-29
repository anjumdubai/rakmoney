import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {PassportPage} from "../passport/passport";
import {regexValidators} from "../utils/validator";

import {MyDataService} from "../utils/data";


@IonicPage()
@Component({
  selector: 'page-emiratesid',
  templateUrl: 'emiratesid.html',
})
export class EmiratesidPage {

  showContent1: boolean = true;
  showContent2: boolean = false;
  showContent3: boolean = false;


  showImage2: boolean = false;
  showImage3: boolean = false;
  showImage4: boolean = false;
  showImage5: boolean = false;
  showImage6: boolean = false;
  showImage8: boolean = false;

  showImageBlock1: boolean = true;
  showImageBlock2: boolean = false;
  showImageBlock3: boolean = false;
  showImageBlock4: boolean = false;


  frontCompleted: boolean = false;
  fontCompletedAndActive: boolean = false;


  DetailsOneForm: any = {};
  submitAttempt: boolean = false;


  stepCounter = 0;
  step0 = false;
  step1 = false;
  step2 = false;
  step3 = false;
  step4 = false;


  constructor(public navCtrl: NavController,
              public myDataService: MyDataService,
              public formBuilder: FormBuilder,
              public navParams: NavParams) {

    this.getFormData();
  }

  ionViewDidLoad() {

  }


  goToPage(event, item) {
    this.navCtrl.push(PassportPage, {
      item: item
    });
  }

  gotoPhoto(index) {
    if (index === 'showImage2') {

      this.showImage2 = true;
      setTimeout(() => {
        this.showImage2 = true;
        this.showImageBlock1 = false;
        this.showImageBlock2 = true;
      }, 500)

    }

    if (index === 'showImage3') {


      setTimeout(() => {

        this.showImageBlock1 = false;
        this.showImageBlock2 = true;
      }, 500)

    }

    if (index === 'showImage4') {

      this.showImage4 = true;
      setTimeout(() => {
        this.showImageBlock2 = false;
        this.showImageBlock3 = true;
        this.frontCompleted = true;
      }, 500)

    }

    if (index === 'showImage5') {
    }

    if (index === 'showImage6') {

      setTimeout(() => {
        this.fontCompletedAndActive = true;
        this.showImageBlock3 = false;
        this.showImageBlock4 = true;
      }, 500)

    }

    if (index === 'showImage7') {

      this.showImage8 = true;
      setTimeout(() => {
        this.showImageBlock4 = true;
        // this.showImageBlock3 = false;
        // this.showImageBlock4 = true;
      }, 500)

    }

    if (index === 'showImage8') {

      this.showImage8 = true;
      setTimeout(() => {
        // this.showImageBlock1 = false;
      }, 500)

    }


    // if (index === 'showImage2') {
    //   this.showImage2 = true;
    //   this.showImageBlock1 = false;
    //   this.showImageBlock2 = true;
    // }
    // if (index === 'showImage3') {
    //
    //   setTimeout(()=>{
    //     this.showImage2 = true;
    //     this.showImageBlock1 = false;
    //     this.showImageBlock2 = false;
    //     this.showImageBlock3 = true;
    //   }, 500)
    //
    //   //this.showImage3 = true;
    //   this.frontCompleted = true;
    // }
    // if (index === 'showImage4') {
    //
    //   setTimeout(()=>{
    //     this.showImage4 = true;
    //     this.showImageBlock1 = false;
    //     this.showImageBlock2 = false;
    //     this.showImageBlock3 = true;
    //   }, 500)
    //
    //
    //   this.fontCompletedAndActive = true;
    // }
    // if (index === 'showImage5') {
    //   this.showImage5 = true;
    //   this.fontCompletedAndActive = true
    // }


  }

  goBack() {
    this.navCtrl.pop();
  }

  doNothing(event) {
    event.preventDefault();
  }

  showScanningFail() {
    this.showContent1 = false;
    this.showContent2 = true;
  }


  onEmirateIdBlur($event) {
    console.log(this.DetailsOneForm.value.idNumber)
    if (this.DetailsOneForm.value.idNumber) {
      this.DetailsOneForm.idNumber = regexValidators.numberMaskEmiratesID(this.DetailsOneForm.idNumber)
      console.log(this.DetailsOneForm.idNumber)
    }
  }

  onExpiryEvent($event) {
    console.log(this.DetailsOneForm.value.idCardExpiry)
    if (this.DetailsOneForm.value.idCardExpiry) {
      this.DetailsOneForm.idCardExpiry = regexValidators.dateDDMMYYYY(this.DetailsOneForm.idCardExpiry)
      console.log(this.DetailsOneForm.idCardExpiry)
    }
  }


  getFormData() {
    this.DetailsOneForm = this.formBuilder.group({
      idNumber: ['',
        Validators.compose([
          Validators.maxLength(18),
          Validators.minLength(15),
          Validators.required
        ])
      ],
      idName: ['',
        Validators.compose([
          Validators.maxLength(30),
          Validators.minLength(4),
          Validators.required
        ])
      ],

      idNationality: ['',
        Validators.compose([
          Validators.maxLength(30),
          Validators.minLength(4),
          Validators.required
        ])
      ],

      idCardNumber: ['',
        Validators.compose([
          Validators.maxLength(30),
          Validators.minLength(1),
          Validators.required
        ])
      ],

      idCardExpiry: ['',
        Validators.compose([
          Validators.maxLength(10),
          Validators.minLength(8),
          Validators.required
        ])
      ],

    });
  }


  gotoNext(step) {

    if (!this.DetailsOneForm.valid) {
      this.submitAttempt = true;
    }
    else {
      this.submitAttempt = false;
      this.myDataService.SetDataWithKey('emiratesID', this.DetailsOneForm.value);

      this.stepCounter += 1;


      this.step1 = false;
      this.step2 = false;
      this.step3 = false;
      this.step4 = false;

      if (this.stepCounter === 1) {
        this.step1 = true;
        this.step0 = true;
      }

      if (this.stepCounter === 2) {
        this.step2 = true;
      }

      if (this.stepCounter === 3) {
        this.step3 = true;
      }

      if (this.stepCounter === 4) {
        this.step4 = true;
      }

      if (this.stepCounter === 5) {
        this.showContent3 = true;
        this.showContent2 = false;

      }

    }
  }

}
