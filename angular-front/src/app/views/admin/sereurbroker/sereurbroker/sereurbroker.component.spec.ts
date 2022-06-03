import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SereurbrokerComponent } from './sereurbroker.component';

describe('SereurbrokerComponent', () => {
  let component: SereurbrokerComponent;
  let fixture: ComponentFixture<SereurbrokerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SereurbrokerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SereurbrokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
