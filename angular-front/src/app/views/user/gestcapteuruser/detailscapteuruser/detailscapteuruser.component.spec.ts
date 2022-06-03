import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailscapteuruserComponent } from './detailscapteuruser.component';

describe('DetailscapteuruserComponent', () => {
  let component: DetailscapteuruserComponent;
  let fixture: ComponentFixture<DetailscapteuruserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailscapteuruserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailscapteuruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
