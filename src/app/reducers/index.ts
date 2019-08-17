import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as dataapi from '../DataApiStore/DataReducer'
import { environment } from '../../environments/environment';

export interface State {
dataapi: dataapi.State
}

export const reducers: ActionReducerMap<State> = {
dataapi: dataapi.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
