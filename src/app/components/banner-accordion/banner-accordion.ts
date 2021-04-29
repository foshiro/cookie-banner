import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getBanners } from '../../actions/banner.actions';
import { Accordian } from '../../models/banner';
import { BannerState } from '../../reducers/banner.reducer';
import { selectBannerList } from '../../selectors/banner.selectors';

@Component({
    selector: 'banner-accordion',
    templateUrl: 'banner-accordion.html'
})
export class BannerAccordion implements OnInit {
  public bannerList$: Observable<Accordian[]> = this.store.pipe(select(selectBannerList));
  @Input() panelOpenState: boolean;

  constructor(
      private store: Store<BannerState>
  ) {}

  ngOnInit() {
    this.store.dispatch(getBanners());
  }
}
