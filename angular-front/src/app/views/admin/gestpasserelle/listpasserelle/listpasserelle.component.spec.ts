import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpasserelleComponent } from './listpasserelle.component';

describe('ListpasserelleComponent', () => {
  let component: ListpasserelleComponent;
  let fixture: ComponentFixture<ListpasserelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListpasserelleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListpasserelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
