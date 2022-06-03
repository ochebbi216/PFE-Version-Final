import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsactionneuruserComponent } from './detailsactionneuruser.component';

describe('DetailsactionneuruserComponent', () => {
  let component: DetailsactionneuruserComponent;
  let fixture: ComponentFixture<DetailsactionneuruserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsactionneuruserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsactionneuruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
