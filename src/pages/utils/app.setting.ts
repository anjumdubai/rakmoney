import { Injectable } from '@angular/core';

import {Observable} from 'rxjs';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class AppSettingsService {

  private subject = new Subject();

  sendMessage(message){
    this.subject.next(message)
  }

  clearMessage(){
    this.subject.next();
  }

  getMessage(): Observable<any>{
    return this.subject.asObservable()
  }

}
