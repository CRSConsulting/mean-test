import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MobileService } from './mobile.service';
import { MobilesComponent } from './mobiles.component';

@NgModule({
  declarations: [
    AppComponent,
    MobilesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MobileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
