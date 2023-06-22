import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngagementQuestionsComponent } from './engagement-questions.component';

describe('EngagementQuestionsComponent', () => {
  let component: EngagementQuestionsComponent;
  let fixture: ComponentFixture<EngagementQuestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EngagementQuestionsComponent]
    });
    fixture = TestBed.createComponent(EngagementQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
