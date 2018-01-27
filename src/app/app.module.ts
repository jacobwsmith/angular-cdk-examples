import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import {OverlayModule} from '@angular/cdk/overlay';
import {A11yModule} from '@angular/cdk/a11y';

import { AppComponent } from './app.component';
import {ColorOption, ColorPickerComponent} from './color-picker/color-picker.component';


@NgModule({
  declarations: [
    AppComponent,
    ColorPickerComponent,
    ColorOption
  ],
  imports: [
    BrowserModule,
    OverlayModule,
    A11yModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
