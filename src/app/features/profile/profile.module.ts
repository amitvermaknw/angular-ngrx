import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@core/layout/layout.module';
import { StoreModule } from '@ngrx/store';
import { ProfileDetailComponent } from './profile-detail';
import { getProfileReducer } from './store/profile.reducers';
import { ProfileListComponent } from './profile-list';
import { getProfileListReducer } from './store/profileList.reducers';
import { EffectsModule } from '@ngrx/effects';
import { ProfileListEffects } from './store/profileList.effects';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material';


@NgModule({
    declarations: [
        ProfileDetailComponent,
        ProfileListComponent
    ],
    entryComponents: [
        ProfileDetailComponent,
        ProfileListComponent
    ],
    exports: [
        ProfileDetailComponent,
        ProfileListComponent
    ],
    imports: [
        CommonModule,
        LayoutModule,
        MatCardModule,
        MatDividerModule,
        MatListModule,
        MatTableModule,
        MatProgressBarModule,
        StoreModule.forFeature('profile', getProfileReducer),
        StoreModule.forFeature('profilelist', getProfileListReducer),
        EffectsModule.forRoot([ProfileListEffects])
    ]
})
export class ProfileModule { }
