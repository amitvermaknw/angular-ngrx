import { createAction, props } from '@ngrx/store';
import { UserProfile } from '../interfaces/user-profile';

export const getProfileList = createAction(
    '[Profile] Get List'
);

export const getProfileListSuccess = createAction(
    '[ProfileList] Get List Success',
    props<UserProfile>()
);

export const getProfileListFailure = createAction(
    '[ProfileList] Get List Failure',
    props<{ any: any }>()
);
