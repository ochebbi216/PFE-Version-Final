import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterpasserelleuserComponent } from './ajouterpasserelleuser.component';

describe('AjouterpasserelleuserComponent', () => {
  let component: AjouterpasserelleuserComponent;
  let fixture: ComponentFixture<AjouterpasserelleuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterpasserelleuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterpasserelleuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
