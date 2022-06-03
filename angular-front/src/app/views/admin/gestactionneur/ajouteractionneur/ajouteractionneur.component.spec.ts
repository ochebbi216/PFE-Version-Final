import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteractionneurComponent } from './ajouteractionneur.component';

describe('AjouteractionneurComponent', () => {
  let component: AjouteractionneurComponent;
  let fixture: ComponentFixture<AjouteractionneurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouteractionneurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouteractionneurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
