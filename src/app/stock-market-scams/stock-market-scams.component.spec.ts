import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockMarketScamsComponent } from './stock-market-scams.component';

describe('StockMarketScamsComponent', () => {
  let component: StockMarketScamsComponent;
  let fixture: ComponentFixture<StockMarketScamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockMarketScamsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockMarketScamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
