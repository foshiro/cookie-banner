import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { select, Store } from '@ngrx/store';
// import { Observable } from 'rxjs';
//
// import { getGameById, setGameDetail } from '../../actions/game.actions';
// import { Game } from '../../models/game';
// import { GameState } from '../../reducers/game.reducer';
// import { selectCurrentGameDetail } from '../../selectors/game.selectors';

@Component({
    selector: 'cookie-banner-dialog',
    templateUrl: 'cookie-banner-dialog.html',
})
export class CookieBannerDialog implements OnInit {
    // public gameDetail$: Observable<Game> = this.store.pipe(select(selectCurrentGameDetail));;

    constructor(
        // private store: Store<GameState>,
        private dialogRef: MatDialogRef<CookieBannerDialog>,
        @Inject(MAT_DIALOG_DATA) public data
    ) {}

    ngOnInit() {
        // this.store.dispatch(setGameDetail({ gameDetail: null }));
        // this.store.dispatch(getGameById({ gameId: this.data.gameId }));
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}
