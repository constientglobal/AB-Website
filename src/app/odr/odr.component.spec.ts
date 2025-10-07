import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdrComponent } from './odr.component';

describe('OdrComponent', () => {
  let component: OdrComponent;
  let fixture: ComponentFixture<OdrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OdrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
