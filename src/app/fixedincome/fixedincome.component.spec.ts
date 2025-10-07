import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedincomeComponent } from './fixedincome.component';

describe('FixedincomeComponent', () => {
  let component: FixedincomeComponent;
  let fixture: ComponentFixture<FixedincomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FixedincomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixedincomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
