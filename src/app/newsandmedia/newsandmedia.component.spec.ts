import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsandmediaComponent } from './newsandmedia.component';

describe('NewsandmediaComponent', () => {
  let component: NewsandmediaComponent;
  let fixture: ComponentFixture<NewsandmediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsandmediaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsandmediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
