import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerySearchComponent } from './gallery-search.component';

describe('GallerySearchComponent', () => {
  let component: GallerySearchComponent;
  let fixture: ComponentFixture<GallerySearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GallerySearchComponent]
    });
    fixture = TestBed.createComponent(GallerySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
