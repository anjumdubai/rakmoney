import { Component } from '@angular/core';

@Component({
  selector: 'ui-elements',
  templateUrl: 'ui-elements.html'
})
export class UiElementsComponent {

  text: string;

  constructor() {
    console.log('Hello UiElementsComponent Component');
    this.text = 'Hello World';
  }

}
