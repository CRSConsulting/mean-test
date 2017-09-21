import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MobileService } from './mobile.service';
import { MobilesComponent } from './mobiles.component';
import { RouterModule } from '@angular/router';
// routes
import { appRoutes } from '../routes';

@NgModule({
  declarations: [
    AppComponent,
    MobilesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [MobileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
