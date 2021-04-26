import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, of } from 'rxjs';
import { catchError, concatMap} from 'rxjs/operators';
import {
    getBanners,
    setBannerList
} from '../actions/banner.actions';
import { BannerResponse } from '../models/banner';
import { BannerState } from '../reducers/banner.reducer';
import { BannerService } from '../services/banner.service';

@Injectable()
export class BannerEffects {
    constructor(
        private actions$: Actions,
        private store: Store<BannerState>,
        private bannerService: BannerService
    ) {}

    getBanners$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getBanners),
            concatMap(() => this.bannerService.getBanners()
                .pipe(
                    concatMap((response: BannerResponse) => {
                        return of(
                            setBannerList({ bannerList: response.accordian }),
                        );
                    }),
                    catchError(() => EMPTY)
                )
            )
        )
    );
}
