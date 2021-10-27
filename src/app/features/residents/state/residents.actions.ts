import { createAction, props } from '@ngrx/store';

import { Resident } from '../models/resident.model';

export const deleteResident = createAction(
  '[Residents] Delete Resident',
  props<{ id: string }>()
);

export const load = createAction('[Residents] Load');

export const loadSuccess = createAction(
  '[API] Load Success',
  props<{ list: Resident[] }>()
);

export const loadFailure = createAction('[API] Load Failure');
