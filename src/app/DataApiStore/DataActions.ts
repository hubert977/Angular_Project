import { createAction,props } from '@ngrx/store';

export const addData = createAction(
'AddData',
props<{FilterData: any}>()
);
export const ChangeStateSearch = createAction(
'ChangeStateSearch',
props<{ShowSearch: Boolean}>()
);
export const AddDataArray = createAction(
'AddDataArray',
props<{DataArray: any}>()
);
export const ChangeStateTyping = createAction(
    'ChangeStateTyping',
    props<{ShowStateArray: Boolean}>()
    );
