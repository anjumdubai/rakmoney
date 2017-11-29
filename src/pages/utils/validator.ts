import {AbstractControl} from "@angular/forms";

//const pureEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const regexValidators = {
  phone: '[\+][0-9() ]{7,}$',
  //email: pureEmail,
  makeNumberHyphen: (Num) => {
    return Num.replace(/(\d{2})(\d{3})(\d{4})/, "$1-$2-$3")
  },
  numberMaskEmiratesID: (Num) => {
    return Num.replace(/(\d{3})(\d{4})(\d{7})(\d{1})/, "$1-$2-$3-$4")
  },
  dateDDMMYYYY: (Num) => {
    if(Num === undefined){
      return
    }
    return Num.replace(/(\d{2})(\d{2})(\d{4})/, "$1-$2-$3")
  }

};


export function emailValidator(control: AbstractControl): { [key: string]: boolean } {
  let EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (control.value != "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
    return {invalid: true};
  }
  return null;
}
