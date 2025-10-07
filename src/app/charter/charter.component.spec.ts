import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharterComponent } from './charter.component';

describe('CharterComponent', () => {
  let component: CharterComponent;
  let fixture: ComponentFixture<CharterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
