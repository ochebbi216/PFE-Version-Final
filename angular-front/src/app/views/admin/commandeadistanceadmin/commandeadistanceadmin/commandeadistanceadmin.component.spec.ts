import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeadistanceadminComponent } from './commandeadistanceadmin.component';

describe('CommandeadistanceadminComponent', () => {
  let component: CommandeadistanceadminComponent;
  let fixture: ComponentFixture<CommandeadistanceadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandeadistanceadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeadistanceadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
