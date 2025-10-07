import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubBrokersComponent } from './sub-brokers.component';

describe('SubBrokersComponent', () => {
  let component: SubBrokersComponent;
  let fixture: ComponentFixture<SubBrokersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubBrokersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubBrokersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
