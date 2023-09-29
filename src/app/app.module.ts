import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharingComponent } from './sharing/sharing.component';
import { AdminComponent } from './admin/admin.component';
import { McComponent } from './mc/mc.component';
import { RtModule } from './rt/rt.module';

@NgModule({
  declarations: [
    AppComponent,
    SharingComponent,
    AdminComponent,
    McComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // module
    RtModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
