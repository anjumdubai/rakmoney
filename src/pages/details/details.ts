import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';

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
  validator;
  selectPhonePre;
  pageTitle ;
  onSubmitError;

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
              public translateService: TranslateService,
              public formBuilder: FormBuilder,
              public navParams: NavParams) {

    this.selectedCountryCodes = this.countryCodes[0];
    this.doTranslation();


    this.selectPhonePre = {
      title: 'Country Prefix',
    };

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

  doTranslation(){
    this.translateService.get('BREADCRUMBS').subscribe((res: any) => {
      this.pageTitle = res.DETAILS;
    });
    this.translateService.get('SUBMIT').subscribe((res: any) => {
      this.onSubmitError = res.ERROR;
    });
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
