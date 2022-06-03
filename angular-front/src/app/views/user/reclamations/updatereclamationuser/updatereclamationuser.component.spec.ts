import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatereclamationuserComponent } from './updatereclamationuser.component';

describe('UpdatereclamationuserComponent', () => {
  let component: UpdatereclamationuserComponent;
  let fixture: ComponentFixture<UpdatereclamationuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatereclamationuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatereclamationuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
