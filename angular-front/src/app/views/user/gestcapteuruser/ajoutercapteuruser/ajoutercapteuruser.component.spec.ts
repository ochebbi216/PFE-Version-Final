import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutercapteuruserComponent } from './ajoutercapteuruser.component';

describe('AjoutercapteuruserComponent', () => {
  let component: AjoutercapteuruserComponent;
  let fixture: ComponentFixture<AjoutercapteuruserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutercapteuruserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutercapteuruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
