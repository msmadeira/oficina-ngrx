import {Component, OnDestroy, OnInit} from '@angular/core';

import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

import {ResidentsService} from "../../services/residents.service";
import {Resident} from "../../models/resident.model";

@Component({
  selector: 'app-root-residents',
  templateUrl: './root-residents.component.html',
  styleUrls: ['./root-residents.component.scss']
})
export class RootResidentsComponent implements OnInit, OnDestroy {

  residents: Resident[] | undefined;
  isModalOpen: boolean = false;

  private componentDestroyed$ = new Subject();

  constructor(private residentsService: ResidentsService) {
  }

  ngOnInit() {
    this.residentsService.load()
      .pipe(
        takeUntil(this.componentDestroyed$),
      )
      .subscribe((residents: Resident[]) => this.residents = residents)
  }

  ngOnDestroy() {
    this.componentDestroyed$.next();
    this.componentDestroyed$.unsubscribe();
  }
}
