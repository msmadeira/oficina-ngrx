import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {EffectsModule} from '@ngrx/effects';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EmptyStateComponent} from './features/components/empty-state/empty-state.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      autoPause: true,
    }),
  ],
  declarations: [
    AppComponent,
    EmptyStateComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
