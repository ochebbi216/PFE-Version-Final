import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdpasserelleComponent } from './updpasserelle.component';

describe('UpdpasserelleComponent', () => {
  let component: UpdpasserelleComponent;
  let fixture: ComponentFixture<UpdpasserelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdpasserelleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdpasserelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
