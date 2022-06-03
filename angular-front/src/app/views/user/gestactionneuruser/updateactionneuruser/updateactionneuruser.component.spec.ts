import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateactionneuruserComponent } from './updateactionneuruser.component';

describe('UpdateactionneuruserComponent', () => {
  let component: UpdateactionneuruserComponent;
  let fixture: ComponentFixture<UpdateactionneuruserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateactionneuruserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateactionneuruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
