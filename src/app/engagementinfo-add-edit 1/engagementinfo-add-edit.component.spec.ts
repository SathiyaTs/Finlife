import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngagementinfoAddEditComponent } from './engagementinfo-add-edit.component';

describe('EngagementinfoAddEditComponent', () => {
  let component: EngagementinfoAddEditComponent;
  let fixture: ComponentFixture<EngagementinfoAddEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EngagementinfoAddEditComponent]
    });
    fixture = TestBed.createComponent(EngagementinfoAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
