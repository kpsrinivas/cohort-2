import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FactorialComponent } from './factorial.component';
import { SumComponent } from './sum.component';

@NgModule({
  declarations: [
    AppComponent,
    FactorialComponent,
    SumComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
