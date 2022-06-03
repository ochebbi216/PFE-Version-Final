import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListactionneuruserComponent } from './listactionneuruser.component';

describe('ListactionneuruserComponent', () => {
  let component: ListactionneuruserComponent;
  let fixture: ComponentFixture<ListactionneuruserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListactionneuruserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListactionneuruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
