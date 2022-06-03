import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdcapteurComponent } from './updcapteur.component';

describe('UpdcapteurComponent', () => {
  let component: UpdcapteurComponent;
  let fixture: ComponentFixture<UpdcapteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdcapteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdcapteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
