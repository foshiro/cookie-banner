import { Action, createReducer, on } from '@ngrx/store';
import { setBannerList } from '../actions/banner.actions';
import { Accordian } from '../models/banner';

export interface BannerState {
  bannerList: Accordian[];
}

export const initialState: BannerState = {
  bannerList: []
};

const bannerReducer = createReducer(
    initialState,
    on(setBannerList, (state, { bannerList }) => {
        return { ...state, bannerList };
    })
);

export function reducer(state: BannerState, action: Action) {
    return bannerReducer(state, action);
}
