import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternshipProgramComponent } from './internship-program.component';

describe('InternshipProgramComponent', () => {
  let component: InternshipProgramComponent;
  let fixture: ComponentFixture<InternshipProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternshipProgramComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternshipProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
