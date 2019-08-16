import { Action, createReducer, on } from '@ngrx/store';
import {initialState} from './DataStore'
import {addData, AddDataArray} from './DataActions';
import {ChangeStateSearch} from './DataActions';
export interface State {
  FilterData: any,
  ShowSearch: Boolean,
  DataArray: any
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
    }))
  );
  
  export function reducer(state: State | undefined, action: Action) {
    return dataApi(state, action);
  }