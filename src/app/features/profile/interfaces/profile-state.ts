import { UserProfile, UserProfileList } from './user-profile';

export interface ProfileState {
    user?: UserProfile;
}

export interface ProfileListState {
    list?: UserProfileList;
}
