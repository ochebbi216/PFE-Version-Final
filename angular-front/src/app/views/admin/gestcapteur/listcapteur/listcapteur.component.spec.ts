import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcapteurComponent } from './listcapteur.component';

describe('ListcapteurComponent', () => {
  let component: ListcapteurComponent;
  let fixture: ComponentFixture<ListcapteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcapteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcapteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
