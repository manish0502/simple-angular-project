import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackNewComponent } from './feedback-new.component';

describe('FeedbackNewComponent', () => {
  let component: FeedbackNewComponent;
  let fixture: ComponentFixture<FeedbackNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
