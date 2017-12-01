import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    HeaderComponent],
  imports: [CommonModule,
    TranslateModule.forChild()],
  exports: [
    CommonModule,
    HeaderComponent]
})
export class ComponentsModule {
}
