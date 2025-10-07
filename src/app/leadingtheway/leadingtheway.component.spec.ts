import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadingthewayComponent } from './leadingtheway.component';

describe('LeadingthewayComponent', () => {
  let component: LeadingthewayComponent;
  let fixture: ComponentFixture<LeadingthewayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadingthewayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadingthewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
