import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


import {PhotoPage} from "../photo/photo";
import {MyDataService} from "../utils/data";

@IonicPage()
@Component({
  selector: 'page-passport',
  templateUrl: 'passport.html',
})
export class PassportPage {

  showContent1: boolean = true;
  showContent2: boolean = false;
  showContent3: boolean = false;

  showImage1: boolean = true;
  showImage2: boolean = false;

  frontCompleted: boolean = false;

  DetailsOneForm: any = {};
  submitAttempt: boolean = false;

  stepCounter = 0;
  step0 = false;
  step1 = false;
  step2 = false;
  step3 = false;
  step4 = false;

  //create Years DOB
  dobYears =[];
  selectedDOB;
  //create Months
  dobMonths =[];
  selectedMonth;
  //create Days
  dobDays =[];
  selectedDay;



  //create Years Passport Issue
  passportIssueYears =[];
  selectedPassportIssueYear;
  //create Months
  passportIssueMonths =[];
  selectedPassportIssueMonth;
  //create Days
  passportIssueDays =[];
  selectedPassportIssueDay;



  //create Years Passport Expire
  passportExpireYears =[];
  selectedPassportExpireYear;
  //create Months
  passportExpireMonths =[];
  selectedPassportExpireMonth;
  //create Days
  passportExpireDays =[];
  selectedPassportExpireDay;

  //Gender
  genders =['Male', 'Female'];
  selectedGender;




  constructor(public navCtrl: NavController,
              public myDataService: MyDataService,
              public formBuilder: FormBuilder,
              public navParams: NavParams) {

    this.getFormData();
    this.generateDOBValues();
    this.generatePassportIssueValues();
    this.generatePassportExpireValues()

    this.selectedGender = this.genders[0]

  }

  ionViewDidLoad() {

  }


  goToPage(event, item) {
    this.navCtrl.push(PhotoPage, {
      item: item
    });
  }

  goBack() {
    this.navCtrl.pop();
  }


  gotoPhoto(index) {
    this.showImage1 = false;
    this.showImage2 = false;

    if (index === 'showImage2') {
      this.showImage2 = true;
      this.frontCompleted = true;
    }

  }

  doNothing(event) {
    event.preventDefault();
  }

  showScanningFail() {
    this.showContent1 = false;
    this.showContent2 = true;
  }


  getFormData() {
    this.DetailsOneForm = this.formBuilder.group({
      passportType: ['',
        Validators.compose([
          Validators.maxLength(5),
          Validators.minLength(1),
          Validators.required
        ])
      ],
      passportNumber: ['',
        Validators.compose([
          Validators.maxLength(30),
          Validators.minLength(4),
          Validators.required
        ])
      ],

      passportSurname: ['',
        Validators.compose([
          Validators.maxLength(30),
          Validators.minLength(2),
          Validators.required
        ])
      ],

      passportFirstName: ['',
        Validators.compose([
          Validators.maxLength(30),
          Validators.minLength(1),
          Validators.required
        ])
      ],

      passportNationality: ['',
        Validators.compose([
          Validators.maxLength(30),
          Validators.minLength(1),
          Validators.required
        ])
      ],

      passportDOB: ['',
        Validators.compose([
          Validators.maxLength(30),
          Validators.minLength(1),
          Validators.required
        ])
      ],

      passportMonth: ['',
        Validators.compose([
          Validators.maxLength(30),
          Validators.minLength(1),
          Validators.required
        ])
      ],

      passportDay: ['',
        Validators.compose([
          Validators.maxLength(30),
          Validators.minLength(1),
          Validators.required
        ])
      ],

      passportGender: ['',
        Validators.compose([
          Validators.maxLength(30),
          Validators.minLength(1),
          Validators.required
        ])
      ],
      passportPlaceOfBirth: ['',
        Validators.compose([
          Validators.maxLength(30),
          Validators.minLength(1),
          Validators.required
        ])
      ],

      passportIssueDay: ['',
        Validators.compose([
          Validators.maxLength(30),
          Validators.minLength(1),
          Validators.required
        ])
      ],

      passportIssueMonth: ['',
        Validators.compose([
          Validators.maxLength(30),
          Validators.minLength(1),
          Validators.required
        ])
      ],

      passportIssueYear: ['',
        Validators.compose([
          Validators.maxLength(30),
          Validators.minLength(1),
          Validators.required
        ])
      ],

      passportExpireDay: ['',
        Validators.compose([
          Validators.maxLength(30),
          Validators.minLength(1),
          Validators.required
        ])
      ],

      passportExpireMonth: ['',
        Validators.compose([
          Validators.maxLength(30),
          Validators.minLength(1),
          Validators.required
        ])
      ],

      passportExpireYear: ['',
        Validators.compose([
          Validators.maxLength(30),
          Validators.minLength(1),
          Validators.required
        ])
      ],








    });
  }


  gotoNext() {


    if (!this.DetailsOneForm.valid) {
      this.submitAttempt = true;
    }
    else {

      this.myDataService.SetDataWithKey('Passport', this.DetailsOneForm.value);

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


  generateDOBValues(){
    //create year for DOB
    this.createYears(60, this.dobYears);
    this.selectedDOB = this.dobYears[28];


    //create Months for DOB
    this.createNumbers(1,12, this.dobMonths);
    this.selectedMonth = this.dobMonths[0];


    //create Days for DOB
    this.createNumbers(1,31, this.dobDays);
    this.selectedDay = this.dobDays[0];

  }


  generatePassportIssueValues(){

    this.createYears(20, this.passportIssueYears);
    this.selectedPassportIssueYear = this.passportIssueYears[20];

    this.createNumbers(1,12, this.passportIssueMonths);
    this.selectedPassportIssueMonth = this.passportIssueMonths[0];

    this.createNumbers(1,31, this.passportIssueDays);
    this.selectedPassportIssueDay = this.passportIssueDays[0];

  }


  generatePassportExpireValues(){

    this.createYears(20, this.passportExpireYears);
    this.selectedPassportExpireYear = this.passportExpireYears[20];

    this.createNumbers(1,12, this.passportExpireMonths);
    this.selectedPassportExpireMonth = this.passportExpireMonths[0];

    this.createNumbers(1,31, this.passportExpireDays);
    this.selectedPassportExpireDay = this.passportExpireDays[0];

  }




  createYears(minYear, myVar) {
    let min = new Date().getFullYear();
    let max = min - minYear;
    for (let i = max; i <= min; i++) {
      myVar.push(i)
    }
  }

  createNumbers(start, end, myVar) {
    for (let i = start; i <= end; i++) {
      myVar.push(i)
    }
  }


}
