import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailspasserelleuserComponent } from './detailspasserelleuser.component';

describe('DetailspasserelleuserComponent', () => {
  let component: DetailspasserelleuserComponent;
  let fixture: ComponentFixture<DetailspasserelleuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailspasserelleuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailspasserelleuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
