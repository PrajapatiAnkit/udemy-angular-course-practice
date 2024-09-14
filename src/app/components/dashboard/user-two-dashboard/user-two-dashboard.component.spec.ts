import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTwoDashboardComponent } from './user-two-dashboard.component';

describe('UserTwoDashboardComponent', () => {
  let component: UserTwoDashboardComponent;
  let fixture: ComponentFixture<UserTwoDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTwoDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTwoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
