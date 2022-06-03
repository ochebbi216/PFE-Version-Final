import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeadistanceComponent } from './commandeadistance.component';

describe('CommandeadistanceComponent', () => {
  let component: CommandeadistanceComponent;
  let fixture: ComponentFixture<CommandeadistanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandeadistanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeadistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
