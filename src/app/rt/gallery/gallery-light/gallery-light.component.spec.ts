import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryLightComponent } from './gallery-light.component';

describe('GalleryLightComponent', () => {
  let component: GalleryLightComponent;
  let fixture: ComponentFixture<GalleryLightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryLightComponent]
    });
    fixture = TestBed.createComponent(GalleryLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
