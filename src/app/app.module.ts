import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerAccordion } from './components/banner-accordion/banner-accordion';
import { CookieBannerDialog } from './components/banner-dialog/cookie-banner-dialog';
import { BannerEffects } from './effects/banner.effects';
import { reducer } from './reducers/banner.reducer';
import { BannerService } from './services/banner.service';

@NgModule({
  declarations: [
    AppComponent,
    CookieBannerDialog,
    BannerAccordion
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    NoopAnimationsModule,
    MatButtonModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({banner: reducer}, {}),
    EffectsModule.forRoot([BannerEffects]),
    MatExpansionModule,
    MatSlideToggleModule,
    MatIconModule
  ],
  providers: [BannerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
