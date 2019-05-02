import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule  ],
  declarations: [ 
    AppComponent,
    HelloComponent
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
