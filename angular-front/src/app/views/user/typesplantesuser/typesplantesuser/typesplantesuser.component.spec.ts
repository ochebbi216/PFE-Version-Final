import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesplantesuserComponent } from './typesplantesuser.component';

describe('TypesplantesuserComponent', () => {
  let component: TypesplantesuserComponent;
  let fixture: ComponentFixture<TypesplantesuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypesplantesuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesplantesuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
