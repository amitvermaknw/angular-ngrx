import { UserProfileList } from '@interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getProfileListState = createFeatureSelector<UserProfileList>('profilelist');

export const getProfileList = createSelector(getProfileListState, (list) => {
    return list
});
