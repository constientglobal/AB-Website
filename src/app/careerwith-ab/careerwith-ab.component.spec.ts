import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerwithABComponent } from './careerwith-ab.component';

describe('CareerwithABComponent', () => {
  let component: CareerwithABComponent;
  let fixture: ComponentFixture<CareerwithABComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareerwithABComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareerwithABComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
