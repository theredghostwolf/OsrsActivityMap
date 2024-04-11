import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGearSetupComponent } from './create-gear-setup.component';

describe('CreateGearSetupComponent', () => {
  let component: CreateGearSetupComponent;
  let fixture: ComponentFixture<CreateGearSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateGearSetupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateGearSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
