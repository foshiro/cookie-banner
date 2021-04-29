import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'cookie-banner-dialog',
    templateUrl: 'cookie-banner-dialog.html',
    styleUrls: ['./cookie-banner-dialog.scss']
})
export class CookieBannerDialog  {
  public panelOpenState = false;

  constructor(
      private dialogRef: MatDialogRef<CookieBannerDialog>,
      @Inject(MAT_DIALOG_DATA) public data
  ) {}

  onNoClick(): void {
      this.dialogRef.close();
  }

  openCustomize() {
    this.panelOpenState = !this.panelOpenState;
  }
}
