import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdactionneurComponent } from './updactionneur.component';

describe('UpdactionneurComponent', () => {
  let component: UpdactionneurComponent;
  let fixture: ComponentFixture<UpdactionneurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdactionneurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdactionneurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
