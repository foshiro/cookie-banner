import { createAction, props } from '@ngrx/store';
import { Accordian } from '../models/banner';

export const getBanners = createAction(
  '[Game] Get Banners'
);

export const setBannerList = createAction(
    '[Game] Set Banner List',
    props<{ bannerList: Accordian[] }>()
);

