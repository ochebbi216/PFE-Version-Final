import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListreclamaionComponent } from './listreclamaion.component';

describe('ListreclamaionComponent', () => {
  let component: ListreclamaionComponent;
  let fixture: ComponentFixture<ListreclamaionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListreclamaionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListreclamaionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
