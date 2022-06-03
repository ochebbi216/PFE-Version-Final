import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicuserComponent } from './topicuser.component';

describe('TopicuserComponent', () => {
  let component: TopicuserComponent;
  let fixture: ComponentFixture<TopicuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
