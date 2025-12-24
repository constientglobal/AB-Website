import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ACSComponent } from './acs.component';

describe('ACSComponent', () => {
  let component: ACSComponent;
  let fixture: ComponentFixture<ACSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ACSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ACSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
