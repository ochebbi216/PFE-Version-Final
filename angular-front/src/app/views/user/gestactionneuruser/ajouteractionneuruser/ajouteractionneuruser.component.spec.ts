import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteractionneuruserComponent } from './ajouteractionneuruser.component';

describe('AjouteractionneuruserComponent', () => {
  let component: AjouteractionneuruserComponent;
  let fixture: ComponentFixture<AjouteractionneuruserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouteractionneuruserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouteractionneuruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
