import { Component, OnInit } from '@angular/core';
import { RtComponent } from '../rt.component';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent extends RtComponent implements OnInit{
  constructor() {
    super();
    
  }

  ngOnInit(): void {
      console.log("HomeComponent")
  }

}
