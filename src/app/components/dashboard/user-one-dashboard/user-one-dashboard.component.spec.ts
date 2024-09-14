import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOneDashboardComponent } from './user-one-dashboard.component';

describe('UserOneDashboardComponent', () => {
  let component: UserOneDashboardComponent;
  let fixture: ComponentFixture<UserOneDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserOneDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOneDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
