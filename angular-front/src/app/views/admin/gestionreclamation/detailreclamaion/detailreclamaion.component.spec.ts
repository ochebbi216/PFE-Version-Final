import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailreclamaionComponent } from './detailreclamaion.component';

describe('DetailreclamaionComponent', () => {
  let component: DetailreclamaionComponent;
  let fixture: ComponentFixture<DetailreclamaionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailreclamaionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailreclamaionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
