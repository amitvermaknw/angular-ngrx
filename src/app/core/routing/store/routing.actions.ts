import { GoPayload, SuccessPayload } from '@interfaces';
import { createAction, props } from '@ngrx/store';
import { State } from './routing.reducers';

const go = createAction('[Routing] Go', props<GoPayload>());
const reload = createAction('[Routing] Reloaded');
const start = createAction('[Routing] Started');
const success = createAction('[Routing] Succeed', props<SuccessPayload>());
const params = createAction('[Routing] With Param', props<State>());

export const routingActions = { go, reload, start, success, params };
