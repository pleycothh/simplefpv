import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

import { RtModule } from './rt/rt.module';
import { AdminComponent } from './admin/admin.component';
import { McComponent } from './mc/mc.component';
import { AdminModule } from './admin/admin.module';

import { CommonModule } from '@angular/common';
import { NbCardModule } from '@nebular/theme';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    McComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RtModule,
    AdminModule,
    CommonModule, 
    NbCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
