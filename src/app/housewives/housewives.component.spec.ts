import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousewivesComponent } from './housewives.component';

describe('HousewivesComponent', () => {
  let component: HousewivesComponent;
  let fixture: ComponentFixture<HousewivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HousewivesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HousewivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
