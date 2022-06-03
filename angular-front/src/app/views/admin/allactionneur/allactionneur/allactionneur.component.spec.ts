import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllactionneurComponent } from './allactionneur.component';

describe('AllactionneurComponent', () => {
  let component: AllactionneurComponent;
  let fixture: ComponentFixture<AllactionneurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllactionneurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllactionneurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
