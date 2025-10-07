import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmsandmifComponent } from './pmsandmif.component';

describe('PmsandmifComponent', () => {
  let component: PmsandmifComponent;
  let fixture: ComponentFixture<PmsandmifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PmsandmifComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PmsandmifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
