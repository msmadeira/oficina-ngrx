import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RootResidentsComponent} from "./components/root-residents/root-residents.component";

const routes: Routes = [{
  path: '',
  component: RootResidentsComponent,
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class ResidentsRoutingModule {
}
