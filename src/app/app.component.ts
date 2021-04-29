import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CookieBannerDialog } from './components/banner-dialog/cookie-banner-dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private dialog: MatDialog) {}
  title = 'cookie-banner';

  openBanners() {
    this.dialog.open(CookieBannerDialog, { width: '30%', maxHeight: '90vh' });
  }
}
