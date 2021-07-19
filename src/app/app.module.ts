import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TallComponent } from './tall.component';

import { 
  MatProgressSpinnerModule, 
MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS,
MatTabsModule
 } from '@angular/material';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    FlexLayoutModule,
  ],
  declarations: [
    AppComponent, 
    HelloComponent,
    TallComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    // however: diameter = 50 works!
    { provide: MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS, useValue: { diameter: 40 } }
  ]
})
export class AppModule { }
