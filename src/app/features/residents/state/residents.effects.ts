import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { Resident } from '../models/resident.model';
import { ResidentsService } from '../services/residents.service';
import * as fromResidentsActions from './residents.actions';

@Injectable()
export class ResidentsEffects {

  load$ = createEffect(() => this.actions$.pipe(
    ofType(fromResidentsActions.load),
    mergeMap(() => this.residentsService.load()
      .pipe(
        map((list: Resident[]) => fromResidentsActions.loadSuccess({ list })),
        catchError(() => of(fromResidentsActions.loadFailure()))
      ))
    )
  );

  constructor(private actions$: Actions,
              private residentsService: ResidentsService) {
  }
}
