import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninDashboardComponent } from './signin-dashboard.component';

describe('SigninDashboardComponent', () => {
  let component: SigninDashboardComponent;
  let fixture: ComponentFixture<SigninDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigninDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
