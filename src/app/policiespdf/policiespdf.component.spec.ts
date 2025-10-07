import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliciespdfComponent } from './policiespdf.component';

describe('PoliciespdfComponent', () => {
  let component: PoliciespdfComponent;
  let fixture: ComponentFixture<PoliciespdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoliciespdfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoliciespdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
