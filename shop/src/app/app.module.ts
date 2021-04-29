// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// internal
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

const VENDOR_MODULES = [
  BrowserModule,
]

const INTERNAL_MODULES = [
  AppRoutingModule,
  CoreModule
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ...VENDOR_MODULES,
    ...INTERNAL_MODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
