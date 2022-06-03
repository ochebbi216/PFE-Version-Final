import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcapteuruserComponent } from './listcapteuruser.component';

describe('ListcapteuruserComponent', () => {
  let component: ListcapteuruserComponent;
  let fixture: ComponentFixture<ListcapteuruserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcapteuruserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcapteuruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
