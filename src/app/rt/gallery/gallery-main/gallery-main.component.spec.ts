import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryMainComponent } from './gallery-main.component';

describe('GalleryMainComponent', () => {
  let component: GalleryMainComponent;
  let fixture: ComponentFixture<GalleryMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryMainComponent]
    });
    fixture = TestBed.createComponent(GalleryMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
