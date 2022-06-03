import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListactionneurComponent } from './listactionneur.component';

describe('ListactionneurComponent', () => {
  let component: ListactionneurComponent;
  let fixture: ComponentFixture<ListactionneurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListactionneurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListactionneurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
