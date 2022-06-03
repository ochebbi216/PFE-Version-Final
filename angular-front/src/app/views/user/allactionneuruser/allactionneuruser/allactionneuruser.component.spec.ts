import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllactionneuruserComponent } from './allactionneuruser.component';

describe('AllactionneuruserComponent', () => {
  let component: AllactionneuruserComponent;
  let fixture: ComponentFixture<AllactionneuruserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllactionneuruserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllactionneuruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
