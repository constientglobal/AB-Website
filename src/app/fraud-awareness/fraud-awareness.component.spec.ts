import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FraudAwarenessComponent } from './fraud-awareness.component';

describe('FraudAwarenessComponent', () => {
  let component: FraudAwarenessComponent;
  let fixture: ComponentFixture<FraudAwarenessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FraudAwarenessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FraudAwarenessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
