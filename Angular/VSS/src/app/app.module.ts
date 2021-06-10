import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NotifierModule } from 'angular-notifier';
import { imports } from '../app/_helper/moduleImports'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NotifierModule.withConfig({
      behaviour: {
        autoHide: 2000
      }
    }),
    ...imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
