import { createAction,props } from '@ngrx/store';

export const addData = createAction('AddData',
props<{data: []}>()
);
