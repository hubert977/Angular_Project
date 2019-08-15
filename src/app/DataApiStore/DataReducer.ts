import { Action, createReducer, on } from '@ngrx/store';
import {initialState} from './DataStore'
import {addData} from './DataActions';
export interface State {
  payload: any
}
const dataApi = createReducer(
    initialState,
    on(addData, (state,{payload}) => ({ 
      ...state,
    payload: payload  })),
  );
  
  export function reducer(state: State | undefined, action: Action) {
    return dataApi(state, action);
  }