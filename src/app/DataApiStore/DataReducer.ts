import { Action, createReducer, on } from '@ngrx/store';
import {initialState} from './DataStore'
import {addData} from './DataActions';
export interface State {
  data: any
}
const dataApi = createReducer(
    initialState,
    on(addData, state => ({ ...state  })),
  );
  
  export function reducer(state: State | undefined, action: Action) {
    return dataApi(state, action);
  }