import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepasserelleComponent } from './updatepasserelle.component';

describe('UpdatepasserelleComponent', () => {
  let component: UpdatepasserelleComponent;
  let fixture: ComponentFixture<UpdatepasserelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatepasserelleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatepasserelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
