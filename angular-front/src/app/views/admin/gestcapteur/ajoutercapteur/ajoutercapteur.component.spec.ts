import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutercapteurComponent } from './ajoutercapteur.component';

describe('AjoutercapteurComponent', () => {
  let component: AjoutercapteurComponent;
  let fixture: ComponentFixture<AjoutercapteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutercapteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutercapteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
