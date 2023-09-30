import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RtComponent } from './rt/rt.component';
import { HomeComponent } from './rt/home/home.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
