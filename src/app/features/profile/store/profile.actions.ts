import { createAction, props } from '@ngrx/store';
import { UserProfile } from '@interfaces';

const initProfile = createAction('[Profile] Init');

export const profileActions = { initProfile };

export const getProfileDetailActions = createAction(
    '[ProfileDetail] Get Profile Detail',
    props<UserProfile>()
);

