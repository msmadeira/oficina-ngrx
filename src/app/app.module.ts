import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyStateComponent } from './features/components/empty-state/empty-state.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    EmptyStateComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
