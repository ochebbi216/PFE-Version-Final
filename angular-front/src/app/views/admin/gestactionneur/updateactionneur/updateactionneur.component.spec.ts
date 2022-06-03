import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateactionneurComponent } from './updateactionneur.component';

describe('UpdateactionneurComponent', () => {
  let component: UpdateactionneurComponent;
  let fixture: ComponentFixture<UpdateactionneurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateactionneurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateactionneurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
