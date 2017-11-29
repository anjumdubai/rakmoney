import { Injectable } from '@angular/core';

import { CoolLocalStorage } from 'angular2-cool-storage';

@Injectable()
export class MyDataService {


  localStorage: CoolLocalStorage;

  constructor(localStorage: CoolLocalStorage){
    this.localStorage = localStorage;
  }

  rootContext ='rootContext';

  GetData(key){

    return this.localStorage.getObject(key)
  }

  SetData(object){
    this.localStorage.setObject(this.rootContext , object);
  }

  SetDataWithKey(key, object){
    this.localStorage.setObject(key , object);
  }

}
