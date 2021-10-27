import { Action, createReducer, on } from '@ngrx/store';

import { Resident } from '../models/resident.model';
import * as fromResidentsActions from './residents.actions';

export const residentsFeatureKey = 'residents';

export interface ResidentsState {
  entities: Resident[];
  loading: boolean;
  error: boolean;
}

export const residentsInitialState: ResidentsState = {
  entities: [],
  loading: false,
  error: false,
}

export const reducer = createReducer(
  residentsInitialState,
  on(fromResidentsActions.load, state => ({
    ...state,
    loading: true,
  })),
  on(fromResidentsActions.deleteResident, (state, { id }) => ({
    ...state,
    entities: state.entities.filter(val => val.id !== id),
  })),
  on(fromResidentsActions.loadSuccess, (state, { list }) => ({
    ...state,
    entities: list,
    loading: false,
  })),
  on(fromResidentsActions.loadFailure, state => ({
    ...state,
    loading: false,
    error: true,
  })),
);

export function residentsReducer(state: ResidentsState | undefined,
                                 action: Action): ResidentsState {
  return reducer(state, action);
}
