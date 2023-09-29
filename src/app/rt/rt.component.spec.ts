import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtComponent } from './rt.component';

describe('RtComponent', () => {
  let component: RtComponent;
  let fixture: ComponentFixture<RtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RtComponent]
    });
    fixture = TestBed.createComponent(RtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
