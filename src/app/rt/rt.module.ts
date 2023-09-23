import { NgModule, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { LightgalleryModule } from 'lightgallery/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule, } from '@angular/material/toolbar';
import {MatButtonModule, } from '@angular/material/button';
import {MatIconModule } from '@angular/material/icon';
import { RtComponent } from './rt.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FlashComponent } from './flash/flash.component';
import { RtRoutingModule } from './rt-routing.module';

@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    LightgalleryModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RtRoutingModule,
  ],
  declarations: [
    RtComponent,
    
    NavbarComponent,
    HomeComponent,
    FlashComponent
  ],
  exports: [],
  bootstrap: []
})


export class RtModule{

}
