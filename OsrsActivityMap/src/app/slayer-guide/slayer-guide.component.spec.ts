import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlayerGuideComponent } from './slayer-guide.component';

describe('SlayerGuideComponent', () => {
  let component: SlayerGuideComponent;
  let fixture: ComponentFixture<SlayerGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SlayerGuideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SlayerGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
