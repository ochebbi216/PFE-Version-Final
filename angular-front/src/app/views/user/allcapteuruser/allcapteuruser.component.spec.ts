import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcapteuruserComponent } from './allcapteuruser.component';

describe('AllcapteuruserComponent', () => {
  let component: AllcapteuruserComponent;
  let fixture: ComponentFixture<AllcapteuruserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllcapteuruserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcapteuruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
