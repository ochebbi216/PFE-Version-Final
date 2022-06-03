import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesplantesComponent } from './typesplantes.component';

describe('TypesplantesComponent', () => {
  let component: TypesplantesComponent;
  let fixture: ComponentFixture<TypesplantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypesplantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesplantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
