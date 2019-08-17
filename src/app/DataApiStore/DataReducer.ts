import { Action, createReducer, on } from '@ngrx/store';
import {initialState} from './DataStore'
import {addData, AddDataArray} from './DataActions';
import {ChangeStateSearch} from './DataActions';
import { state } from '@angular/animations';
export interface State {
  FilterData: any,
  ShowSearch: Boolean,
  DataArray: any,
  SearchTyping: Boolean
}
const dataApi = createReducer(
    initialState,
    on(addData, (state,{FilterData}) => ({ 
      ...state,
    payload: FilterData  })),
    on(ChangeStateSearch,(state,{ShowSearch}) => ({
      ...state,
      ShowSearch: ShowSearch})),
    on(AddDataArray,(state,{DataArray})=>({
      ...state,
      DataArray: DataArray
    })),
    on(ChangeStateSearch,(state,{ShowSearch})=>({
      ...state,
       SearchTyping: ShowSearch
    }))
  );
  
  export function reducer(state: State | undefined, action: Action) {
    return dataApi(state, action);
  }