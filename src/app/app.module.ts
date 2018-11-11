import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Struct, Queue } from './queue';
import { PriorityQueue } from "./PriorityQueue";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{ provide: Struct, useClass: PriorityQueue }],
  bootstrap: [AppComponent]
})
export class AppModule { }
