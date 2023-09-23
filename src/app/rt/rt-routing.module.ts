import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { RtComponent } from './rt.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FlashComponent } from './flash/flash.component';

const routes: Routes = [
  {
    path: '',
    component: RtComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'flash', component: FlashComponent },
      { path: 'about', component: AboutComponent }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)

  ],
  exports: [
    RouterModule
]
})
export class RtRoutingModule { }
