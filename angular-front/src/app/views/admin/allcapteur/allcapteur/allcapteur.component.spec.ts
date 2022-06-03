import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcapteurComponent } from './allcapteur.component';

describe('AllcapteurComponent', () => {
  let component: AllcapteurComponent;
  let fixture: ComponentFixture<AllcapteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllcapteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcapteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
