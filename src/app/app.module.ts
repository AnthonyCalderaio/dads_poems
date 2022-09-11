import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TextFieldModule } from '@angular/cdk/text-field';
import { FlexLayoutModule } from '@angular/flex-layout';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PoemListComponent } from './components/poem-list/poem-list.component';
import { PoemCardComponent } from './components/poem-card/poem-card.component';
import { HttpClientModule } from '@angular/common/http';
import { AddPoemComponent } from './components/add-poem/add-poem.component';

@NgModule({
  declarations: [
    AppComponent,
    PoemListComponent,
    PoemCardComponent,
    AddPoemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TextFieldModule,
    FlexLayoutModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
