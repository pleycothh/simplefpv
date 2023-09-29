import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RtComponent } from './rt/rt.component';
import { HomeComponent } from './rt/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: RtComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'login', component: HomeComponent },
      { path: 'build', component: HomeComponent },
      { path: 'store',
        children: [
          {
            path: '',
            component: HomeComponent,
          },
          {
            path: 'cart',
            component: HomeComponent,
          },
          { path: '', redirectTo: 'home', pathMatch: 'full' },
        ]},
      { path: 'about', component: HomeComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
