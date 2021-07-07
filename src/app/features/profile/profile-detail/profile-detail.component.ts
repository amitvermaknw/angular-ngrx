import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { profileActions, getProfileDetailActions } from '@store/actions';
import { AppState } from '@store/reducers';
import { getUserProfile } from '@store/selectors';
import { getParams } from '../../../core/routing/store';
import { UserProfile } from '@interfaces';
import { getItem } from '../store/profile.storage';

@Component({
    selector: 'app-profile-detail',
    styleUrls: ['./profile-detail.component.less'],
    templateUrl: './profile-detail.component.html'
})
export class ProfileDetailComponent implements OnInit {

    user$ = this.store.select(getUserProfile);
    userDetail$: string;

    constructor(private store: Store<AppState>) {
        this.store.select(getParams).pipe().subscribe(res => {
            if (res)
                this.userDetail$ = res.data;
        });
    }

    ngOnInit() {
        if (this.userDetail$) {
            let profileDetails = getItem('profileobj');
            const singleUserDetails: UserProfile = profileDetails.filter((item: UserProfile) => item.uuid === this.userDetail$)[0];
            this.store.dispatch(getProfileDetailActions(singleUserDetails))
        } else {
            this.store.dispatch(profileActions.initProfile());
        }
    }

}
