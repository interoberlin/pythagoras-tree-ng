import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';

import {AppComponent} from './app.component';
import {PythagorasComponent} from './components/pythagoras/pythagoras.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MouseWheelDirective } from './directives/mouse-wheel.directive';

@NgModule({
  declarations: [
    AppComponent,
    PythagorasComponent,
    MouseWheelDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
