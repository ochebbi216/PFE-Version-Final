import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedesreclamationsComponent } from './listedesreclamations.component';

describe('ListedesreclamationsComponent', () => {
  let component: ListedesreclamationsComponent;
  let fixture: ComponentFixture<ListedesreclamationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListedesreclamationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListedesreclamationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
