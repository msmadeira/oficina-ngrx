import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmptyStateComponent} from "./features/components/empty-state/empty-state.component";

const routes: Routes = [
  {
    path: '',
    component: EmptyStateComponent
  },
  {
    path: 'residents',
    loadChildren: () => import('./features/residents/residents.module').then(m => m.ResidentsModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
