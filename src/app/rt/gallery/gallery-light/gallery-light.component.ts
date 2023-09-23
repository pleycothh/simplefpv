import { Component, VERSION, ViewEncapsulation  } from '@angular/core';
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';

@Component({
  selector: 'app-gallery-light',
  templateUrl: './gallery-light.component.html',
  styleUrls: ['./gallery-light.component.scss']
})

export class GalleryLightComponent {
  
  constructor() {
  }

  ngonInit() {
  }

  
  name = "Angular " + VERSION.full;
  settings = {
    counter: false,
    plugins: [lgZoom]
  };
  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };
}
