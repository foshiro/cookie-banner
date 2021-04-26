import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BannerState } from '../reducers/banner.reducer';


export const selectBannerState = createFeatureSelector<BannerState>('banner');

export const selectBannerList = createSelector(
    selectBannerState,
    (state: BannerState) => state.bannerList
);
