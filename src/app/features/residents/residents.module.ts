import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {RootResidentsComponent} from './containers/root-residents/root-residents.component';
import {ResidentsRoutingModule} from "./residents-routing.module";
import {ResidentsService} from "./services/residents.service";
import {ResidentCreateModalComponent} from "./components/resident-create-modal/resident-create-modal.component";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ResidentsRoutingModule,
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
