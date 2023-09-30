import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { RtComponent } from './rt.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: RtComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home',
        children: [
          {path:'',component: HomeComponent},
          {path:'dashboard',component: DashboardComponent}
        ]
      }
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
