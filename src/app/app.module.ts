import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModelListComponent } from './model-list/model-list.component';
import {HttpClientModule} from '@angular/common/http';
import { ModelComponent } from './model/model.component';

@NgModule({
  declarations: [
    AppComponent,
    ModelListComponent,
    ModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
