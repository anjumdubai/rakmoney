import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


import {regexValidators, emailValidator} from "../utils/validator";
import {EmiratesidPage} from "../emiratesid/emiratesid";

import {MyDataService} from "../utils/data";


@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {


  DetailsOneForm: any = {};
  submitAttempt: boolean = false;
  showContentDetails = true;
  showContentActivation = false;
  validator

  selectedCountryCodes;
  countryCodes = [
    {code: +971},
    {code: +972},
    {code: +973},
    {code: +974},
    {code: +975},
    {code: +976},
    {code: +977},
    {code: +978}
  ];


  constructor(public navCtrl: NavController,
              public myDataService: MyDataService,
              public formBuilder: FormBuilder,
              public navParams: NavParams) {

    this.selectedCountryCodes = this.countryCodes[0];


    this.DetailsOneForm = formBuilder.group({
      nameEmiratesID: ['',
        Validators.compose([
          Validators.maxLength(30),
          Validators.minLength(4),
          Validators.pattern('[a-zA-Z ]*'),
          Validators.required
        ])
      ],
      countryCode: ['', Validators.required],
      phoneNumber: ['',
        Validators.compose([
          Validators.maxLength(12),
          Validators.minLength(1),
          Validators.pattern('^[\\d -]+$'),
          Validators.required
        ])
      ],
      emailAddress: ['',
        Validators.compose([emailValidator, Validators.required])
      ]
    });


  }


  ionViewDidLoad() {


  }

  goBack() {
    this.navCtrl.pop();
  }


  goToPage(item) {
    this.navCtrl.push(EmiratesidPage, {
      item: item
    });
  }


  onMobileNumberBlur($event) {
    if (this.DetailsOneForm.value.phoneNumber) {
      this.DetailsOneForm.phoneNumber = regexValidators.makeNumberHyphen(this.DetailsOneForm.phoneNumber)
    }
  }

  onCountryChanges() {
  }

  edit(e) {
    e.preventDefault();
    this.showContentDetails = true;
    this.showContentActivation = false;
  }


  isValidator(event) {
    if (event.length === 4) {
      this.goToPage('emriatesID')
    }
  }

  doNothing(event) {
    event.preventDefault();
  }

  sendActivationCode() {
    if (!this.DetailsOneForm.valid) {
      this.submitAttempt = true;
    }
    else {
      this.showContentDetails = false;
      this.showContentActivation = true;
      this.myDataService.SetData(this.DetailsOneForm.value)
    }

  }


}
