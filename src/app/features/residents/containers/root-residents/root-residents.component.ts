import {Component, OnInit} from '@angular/core';

import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";

import {ResidentsService} from "../../services/residents.service";
import {Resident} from "../../models/resident.model";
import * as fromResidentsActions from '../../state/residents.actions';
import * as fromResidentsSelectors from '../../state/residents.selectors';

@Component({
  selector: 'app-root-residents',
  templateUrl: './root-residents.component.html',
  styleUrls: ['./root-residents.component.scss']
})
export class RootResidentsComponent implements OnInit {

  loading$: Observable<boolean> | undefined;
  residents$: Observable<Resident[]> | undefined;

  residents: Resident[] | undefined;
  isModalOpen: boolean = false;

  constructor(private residentsService: ResidentsService,
              private store: Store) {
  }

  ngOnInit() {
    this.loading$ = this.store.pipe(select(fromResidentsSelectors.selectLoading));
    this.residents$ = this.store.pipe(select(fromResidentsSelectors.selectEntities));
  }

  onLoad() {
    this.store.dispatch(fromResidentsActions.load());
  }

  onDelete(id: string) {
    this.store.dispatch(fromResidentsActions.deleteResident({ id }));
  }
}
