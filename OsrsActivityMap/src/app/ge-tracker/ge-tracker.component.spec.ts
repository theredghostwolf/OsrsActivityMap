import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeTrackerComponent } from './ge-tracker.component';

describe('GeTrackerComponent', () => {
  let component: GeTrackerComponent;
  let fixture: ComponentFixture<GeTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeTrackerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
