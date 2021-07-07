import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getProfileList } from '../store/profileList.selectors';
import { AppState } from '@store/reducers';
import * as profileList from '../store/profileList.actions';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserProfileList } from '../interfaces';
import * as router from '../../../core/routing/store/routing.actions';
import { Router } from '@angular/router';
import { UserProfile } from '@interfaces';
import { saveItem } from '../store/profile.storage';

@Component({
    selector: 'app-profile-list',
    templateUrl: './profile-list.component.html',
    styleUrls: ['./profile-list.component.less']
})
export class ProfileListComponent implements OnInit {

    dataSource: Array<UserProfileList> = [];
    profileListColumns: string[] = ['firstName', 'lastName', 'phoneNumber',
        'cellNumber', 'email', 'city', 'dateOfBirth', 'state']

    myObservableObject$: Observable<any>;

    constructor(private store: Store<AppState>, private router: Router) {
        this.store.select(getProfileList).pipe(
            tap((data: any) => {
                if (!data.isLoading && data.hasOwnProperty('list')) {
                    this.userList(data.list.results);
                }
            })
        ).subscribe();
    }

    ngOnInit() {
        this.store.dispatch(profileList.getProfileList());
    }

    userList(results: any) {
        this.dataSource = results.map((item: any) => {
            return {
                firstName: item.name.first,
                lastName: item.name.last,
                cellNumber: item.cell,
                city: item.location.city,
                dateOfBirth: item.dob.date,
                email: item.email,
                phoneNumber: item.phone,
                picture: item.picture.thumbnail,
                state: item.location.state,
                uuid: item.login.uuid
            }
        });

        //To avoid multiple calls to API in order to fetch users details.
        saveItem('profileobj', this.dataSource);
    }

    getUserDetail(row: UserProfile) {
        /**
         * This dispatch can be defined in multiple ways. not sure if requirement is looking for the same.
         */
        this.store.dispatch(router.routingActions.params({
            currentRoute: null,
            history: [],
            inProgress: false,
            name: null,
            params: { data: row.uuid },
            prevRoute: null,
            queryParams: null,
            url: '/profile'
        }));
        this.router.navigate([`/profile/${row.uuid}`]);
    }

}
