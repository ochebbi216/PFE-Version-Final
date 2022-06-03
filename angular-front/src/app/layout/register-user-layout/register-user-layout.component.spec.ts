import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterUserLayoutComponent } from './register-user-layout.component';

describe('RegisterUserLayoutComponent', () => {
  let component: RegisterUserLayoutComponent;
  let fixture: ComponentFixture<RegisterUserLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterUserLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterUserLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
