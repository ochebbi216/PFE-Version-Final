import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterpasserelleComponent } from './ajouterpasserelle.component';

describe('AjouterpasserelleComponent', () => {
  let component: AjouterpasserelleComponent;
  let fixture: ComponentFixture<AjouterpasserelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterpasserelleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterpasserelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
