import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getBanners } from '../actions/banner.actions';
import { Accordian } from '../models/banner';
import { BannerState } from '../reducers/banner.reducer';
import { selectBannerList } from '../selectors/banner.selectors';

@Component({
    selector: 'cookie-banner-dialog',
    templateUrl: 'cookie-banner-dialog.html',
})
export class CookieBannerDialog implements OnInit {
  public bannerList$: Observable<Accordian[]> = this.store.pipe(select(selectBannerList));

  constructor(
      private store: Store<BannerState>,
      private dialogRef: MatDialogRef<CookieBannerDialog>,
      @Inject(MAT_DIALOG_DATA) public data
  ) {}

  ngOnInit() {
    this.store.dispatch(getBanners());
  }

  onNoClick(): void {
      this.dialogRef.close();
  }
}
