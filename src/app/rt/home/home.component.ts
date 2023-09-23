import { Component, OnInit, ViewChild } from '@angular/core';
import { RtComponent } from '../rt.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends RtComponent implements OnInit{

  /**
   *
   */
  constructor() {
    super();
    
  }

  ngOnInit(): void {
      console.log("HomeComponent")
  }

}
