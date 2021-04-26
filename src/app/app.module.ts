import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookieBannerDialog } from './banner/cookie-banner-dialog';

@NgModule({
  declarations: [
    AppComponent,
    CookieBannerDialog
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    NoopAnimationsModule,
    MatButtonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
