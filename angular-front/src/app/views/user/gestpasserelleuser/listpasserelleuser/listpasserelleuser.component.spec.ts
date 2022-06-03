import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpasserelleuserComponent } from './listpasserelleuser.component';

describe('ListpasserelleuserComponent', () => {
  let component: ListpasserelleuserComponent;
  let fixture: ComponentFixture<ListpasserelleuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListpasserelleuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListpasserelleuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
