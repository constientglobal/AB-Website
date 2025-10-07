import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeamlessbrokingComponent } from './seamlessbroking.component';

describe('SeamlessbrokingComponent', () => {
  let component: SeamlessbrokingComponent;
  let fixture: ComponentFixture<SeamlessbrokingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeamlessbrokingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeamlessbrokingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
