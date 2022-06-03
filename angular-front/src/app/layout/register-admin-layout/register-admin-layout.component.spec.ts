import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAdminLayoutComponent } from './register-admin-layout.component';

describe('RegisterAdminLayoutComponent', () => {
  let component: RegisterAdminLayoutComponent;
  let fixture: ComponentFixture<RegisterAdminLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterAdminLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAdminLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
