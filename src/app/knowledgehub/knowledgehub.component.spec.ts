import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgehubComponent } from './knowledgehub.component';

describe('KnowledgehubComponent', () => {
  let component: KnowledgehubComponent;
  let fixture: ComponentFixture<KnowledgehubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KnowledgehubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnowledgehubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
