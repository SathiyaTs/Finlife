import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngagementInformationComponent } from './engagement-information.component';

describe('EngagementInformationComponent', () => {
  let component: EngagementInformationComponent;
  let fixture: ComponentFixture<EngagementInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EngagementInformationComponent]
    });
    fixture = TestBed.createComponent(EngagementInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
