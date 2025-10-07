import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentAwarenessComponent } from './investment-awareness.component';

describe('InvestmentAwarenessComponent', () => {
  let component: InvestmentAwarenessComponent;
  let fixture: ComponentFixture<InvestmentAwarenessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentAwarenessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentAwarenessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
