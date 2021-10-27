import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {RootResidentsComponent} from './components/root-residents/root-residents.component';
import {ResidentsRoutingModule} from "./residents-routing.module";
import {ResidentsService} from "./services/residents.service";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ResidentsRoutingModule,
  ],
  declarations: [
    RootResidentsComponent,
  ],
  providers: [
    ResidentsService,
  ]
})
export class ResidentsModule {
}
