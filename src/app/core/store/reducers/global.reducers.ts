import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import {crudReducer, CrudState} from '@core/store/reducers/crud.reducer';

export interface CoreState {
  crud: CrudState;
}

export const globalReducers: ActionReducerMap<CoreState> = {
  crud: crudReducer
};

export const getCoreState = createFeatureSelector<CoreState>(
  'core'
);
