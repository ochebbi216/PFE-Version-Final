import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepasserelleuserComponent } from './updatepasserelleuser.component';

describe('UpdatepasserelleuserComponent', () => {
  let component: UpdatepasserelleuserComponent;
  let fixture: ComponentFixture<UpdatepasserelleuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatepasserelleuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatepasserelleuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
