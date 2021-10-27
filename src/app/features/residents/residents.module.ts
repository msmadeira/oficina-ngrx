import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {RootResidentsComponent} from './containers/root-residents/root-residents.component';
import {ResidentsRoutingModule} from "./residents-routing.module";
import {ResidentsService} from "./services/residents.service";
import {ResidentCreateModalComponent} from "./components/resident-create-modal/resident-create-modal.component";
import {residentsFeatureKey, residentsReducer} from './state/residents.reducer';
import {ResidentsEffects} from './state/residents.effects';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ResidentsRoutingModule,
    StoreModule.forFeature(residentsFeatureKey, residentsReducer),
    EffectsModule.forFeature([ResidentsEffects]),
  ],
  declarations: [
    RootResidentsComponent,
    ResidentCreateModalComponent,
  ],
  providers: [
    ResidentsService,
  ]
})
export class ResidentsModule {
}
