import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RootResidentsComponent} from './components/root-residents/root-residents.component';
import {ResidentsRoutingModule} from "./residents-routing.module";

@NgModule({
  imports: [
    CommonModule,
    ResidentsRoutingModule,
  ],
  declarations: [
    RootResidentsComponent,
  ],
})
export class ResidentsModule {
}
