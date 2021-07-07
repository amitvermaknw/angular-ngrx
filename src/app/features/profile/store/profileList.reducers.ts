//import { ProfileListState } from '@interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import { getProfileList, getProfileListSuccess } from './profileList.actions';
import { UserProfileList } from '../interfaces';

const initialState: UserProfileList = {
    isLoading: false,
    isLoadingSuccess: false,
    isLoadingFailure: false
};

const reducer = createReducer(
    initialState,
    on(getProfileList, (state) => {
        return { ...state, isLoading: true };
    }),
    on(getProfileListSuccess, (state, response) => {
        return { ...state, list: response, isLoading: false, isLoadingSuccess: true };
    })
);

export function getProfileListReducer(state: UserProfileList | undefined, action: Action) {

    return reducer(state, action);

}
