import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyAd6U9h9zzhm8RO17-O05IQeeMmZbcJ7oc',
      authDomain: 'sparks-development-sd.firebaseapp.com',
      databaseURL: 'https://sparks-development-sd.firebaseio.com',
      storageBucket: 'gs://sparks-development-sd.appspot.com',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
