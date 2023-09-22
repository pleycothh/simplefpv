import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RtComponent } from './rt/rt.component';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LightgalleryModule } from 'lightgallery/angular';
import { HomeComponent } from './rt/home/home.component';
import { FlashComponent } from './rt/flash/flash.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './rt/navbar/navbar.component';
import {MatToolbarModule, } from '@angular/material/toolbar';
import {MatButtonModule, } from '@angular/material/button';
import {MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    RtComponent,
    HomeComponent,
    FlashComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule, 
    FormsModule,
    LightgalleryModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
