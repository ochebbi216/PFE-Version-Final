import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecapteuruserComponent } from './updatecapteuruser.component';

describe('UpdatecapteuruserComponent', () => {
  let component: UpdatecapteuruserComponent;
  let fixture: ComponentFixture<UpdatecapteuruserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatecapteuruserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatecapteuruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
