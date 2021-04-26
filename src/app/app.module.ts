import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookieBannerDialog } from './banner/cookie-banner-dialog';
import { BannerEffects } from './effects/banner.effects';
import { reducer } from './reducers/banner.reducer';
import { BannerService } from './services/banner.service';

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
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({banner: reducer}, {}),
    EffectsModule.forRoot([BannerEffects])
  ],
  providers: [BannerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
