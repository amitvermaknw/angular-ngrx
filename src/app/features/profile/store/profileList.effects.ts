import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { ProfileService } from '../services/profile.service';
import * as profileAction from './profileList.actions';

@Injectable()
export class ProfileListEffects {

    constructor(
        private actions$: Actions,
        private profileService: ProfileService
    ) { }

    getProfiles$ = createEffect(() =>
        this.actions$.pipe(
            ofType(profileAction.getProfileList),
            switchMap(action =>
                this.profileService.getRandomProfile().pipe(
                    map((response: any) => {

                        return profileAction.getProfileListSuccess(response)
                    }),
                    catchError((error: any) => of(profileAction.getProfileListFailure(error))))
            )
        )
    );

}
