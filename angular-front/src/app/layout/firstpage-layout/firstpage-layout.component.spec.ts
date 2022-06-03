import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstpageLayoutComponent } from './firstpage-layout.component';

describe('FirstpageLayoutComponent', () => {
  let component: FirstpageLayoutComponent;
  let fixture: ComponentFixture<FirstpageLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstpageLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstpageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
