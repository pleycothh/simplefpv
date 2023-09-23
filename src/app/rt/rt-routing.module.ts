import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { RtComponent } from './rt.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { GuidComponent } from './guid/guid.component';
import { BuildComponent } from './build/build.component';
import { BuyComponent } from './buy/buy.component';

const routes: Routes = [
  {
    path: '',
    component: RtComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'news', component: NewsComponent },
      { path: 'guid', component: GuidComponent },
      { path: 'build', component: BuildComponent },
      { path: 'buy', component: BuyComponent },
      { path: 'about', component: AboutComponent },

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
